import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance as axiosInstance } from "./axiosInstance";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/Constants/Constants";
import axios from "axios";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers, contentType }) => {
    try {
      // 🚀 Normal request
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
          ...headers,
        },
      });

      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      // 🔥 If token expired, try to refresh
      if (err.response?.status === 401) {
        try {
          // Call refresh token endpoint
          const refreshResponse = await axios.post(
            "http://localhost:5000/api/v1/auth/refresh-token",
            {},
            { withCredentials: true }
          );

          const newAccessToken = refreshResponse?.data?.accessToken;
          if (newAccessToken) {
            // Save new token
            setToLocalStorage(authKey, newAccessToken);

            // Retry the original request
            const retryResult = await axiosInstance({
              url: baseUrl + url,
              method,
              data,
              params,
              headers: {
                "Content-Type": contentType || "application/json",
                Authorization: `Bearer ${newAccessToken}`,
                ...headers,
              },
            });

            return retryResult;
          }
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          // Optional: logout logic can go here
        }
      }

      // ❌ If still fails, return error to RTK Query
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

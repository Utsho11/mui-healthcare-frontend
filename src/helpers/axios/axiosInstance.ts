import { authKey } from "@/Constants/Constants";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000/api", // change to your backend URL
  withCredentials: true,
});

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// 🔹 Request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response interceptor with token refresh logic
instance.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (response) => {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async (error) => {
    const originalRequest = error.config;

    // 🧠 If accessToken expired
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call your refresh endpoint
        const refreshResponse = await axios.post(
          "http://localhost:5000/api/v1/auth/refresh-token",
          {}, // If using cookies, body can be empty
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse?.data?.accessToken;

        if (newAccessToken) {
          // Save new token in local storage
          setToLocalStorage(authKey, newAccessToken);

          // Update axios default header
          instance.defaults.headers.Authorization = `${newAccessToken}`;
          originalRequest.headers.Authorization = `${newAccessToken}`;

          // Retry original request with new token
          return instance(originalRequest);
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Optional: logout user here
      }
    }

    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong!!!",
      errorMessages: error?.response?.data?.message,
    };

    return Promise.reject(responseObject);
  }
);

export { instance };

import type { IDoctor } from "@/types/doctor";
import { tagType } from "../tag-types";
import { baseApi } from "./baseApi";
import type { IMeta } from "@/types";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagType.doctor],
    }),

    getAllDoctors: build.query({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (args: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: IDoctor[], meta: IMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagType.doctor],
    }),
  }),
});

export const { useCreateDoctorMutation, useGetAllDoctorsQuery } = doctorApi;

import { tagType } from "../tag-types";
import { baseApi } from "./baseApi";

// NOTE: these are the _SAME_ API reference!
const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagType.specialties],
    }),

    gaetAllSpeciality: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagType.specialties],
    }),

    deleteSpeciality: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagType.specialties],
    }),
  }),
});

export const {
  useCreateSpecialityMutation,
  useGaetAllSpecialityQuery,
  useDeleteSpecialityMutation,
} = specialtiesApi;

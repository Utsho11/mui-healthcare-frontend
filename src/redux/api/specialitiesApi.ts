import { tagTypes } from "../tag-types";
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
      invalidatesTags: [tagTypes.specialties],
    }),

    getAllSpeciality: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagTypes.specialties],
    }),

    deleteSpeciality: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
  }),
});

export const {
  useCreateSpecialityMutation,
  useGetAllSpecialityQuery,
  useDeleteSpecialityMutation,
} = specialtiesApi;

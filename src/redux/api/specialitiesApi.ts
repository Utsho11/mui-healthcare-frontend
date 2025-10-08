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
    }),
  }),
});

export const { useCreateSpecialityMutation } = specialtiesApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants";
import type { TestEntity } from "../../types/TestTypes";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["TestEntity"],
  endpoints: (builder) => ({
    getPods: builder.query<TestEntity[], void>({
      query: () => ({
        url: "/test",
      }),
      providesTags: ["TestEntity"],
    }),
  })
});

export const { useGetPodsQuery } = testApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const detectorApi = createApi({
  reducerPath: "detectorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ai-content-detector-ai-gpt.p.rapidapi.com/api/",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", rapidApiKey, "Content-Type");
      headers.set(
        "x-rapidapi-host",
        "ai-content-detector-ai-gpt.p.rapidapi.com"
      );
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    detectText: builder.mutation({
      query: (body) => ({
        url: "detectText/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useDetectTextMutation } = detectorApi;

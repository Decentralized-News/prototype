import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const isProduction = true;
const url = isProduction
    ? "https://decent-news-api.onrender.com/api/"
    : "http://localhost:3500/api/";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: () => ({}),
});

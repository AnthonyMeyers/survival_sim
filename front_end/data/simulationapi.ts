// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const simulationapi = createApi({
  reducerPath: 'simulationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: ({ username, password}) => ({
        url: `/login_check`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        method: "POST",
        body: {
          username,
          password,
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation } = simulationapi
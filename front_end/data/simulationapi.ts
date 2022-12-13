// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface WorldmapProps {
  id: number,
  wmppPosX: number,
  wmppPosY: number,
  wmppPrpId: {id:number},
  wmppWmpId: {id:number}
}

// Define a service using a base URL and expected endpoints
export const simulationapi = createApi({
  reducerPath: 'simulationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000/api' }),
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
    getAnimals: builder.query<any []| null, void>({
      query: () => ({
        url: `/animals?page=1`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        method: "GET",
      }),
    }),
    getProps: builder.query<any []| null, void>({
      query: () => ({
        url: `/props?page=1`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        method: "GET",
      }),
    }),
    getWorldmapPropsLocations: builder.query<WorldmapProps [] | null, void>({
      query: () => ({
        url: `/worldmap_props?page=1`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        method: "GET",
      }),
    }),
    getWorldmapAnimalLocations: builder.query<any []| null, void>({
      query: () => ({
        url: `/worldmap_animals?page=1`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        method: "GET",
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAnimalsQuery,
  useGetPropsQuery,
  useGetWorldmapPropsLocationsQuery,
  useGetWorldmapAnimalLocationsQuery,
  useLoginUserMutation } = simulationapi
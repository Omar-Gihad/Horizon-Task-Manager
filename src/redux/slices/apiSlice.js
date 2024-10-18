import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = "https://server-horizon.vercel.app/api";

const baseQuery = fetchBaseQuery({ baseUrl: API_URI });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Task"],
  endpoints: (builder) => ({
    // Authentication Endpoints
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/user/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    // Task Endpoints
    createTask: builder.mutation({
      query: (task) => ({
        url: "/task/create",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    getTasks: builder.query({
      query: () => "/task",
      providesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...updatedTask }) => ({
        url: `/task/update/${id}`,
        method: "PUT",
        body: updatedTask,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useCreateTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;

import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
  reducerPath: 'dashboard', // Tên field trong Redux state
  tagTypes: ['Users'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token')
      headers.set('authorization', `Bearer ${token}`)
      return headers
    }
  }),

  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
    getUsers: build.query<any, void>({
      query: () => 'user/list'
    })
  })
})
const initialState = {}
const dashboardSlice = createSlice({
  name: 'dash',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(dashboardApi.endpoints.getUsers.matchRejected, (state, action) => {})
    // ... other extraReducers
  }
})
export const {} = dashboardSlice.actions
export const { useGetUsersQuery } = dashboardApi

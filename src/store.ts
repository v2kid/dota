import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { rtkQueryErrorLogger } from 'middleware'
import { dashboardApi } from 'pages/admin/pages/dashboard/dashboard.service'
import { blogApi } from 'pages/admin/pages/blog/blog.service'
import blogReducer from 'pages/admin/pages/blog/blog.slice'
import usertokenReducer, { loginuser } from 'pages/login/login.service'
// ...

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    usertoken: usertokenReducer,
    [blogApi.reducerPath]: blogApi.reducer, // thêm reducer được tạo từ api slice
    [loginuser.reducerPath]: loginuser.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer
  },
  // Thêm api middleware để enable các tính năng như caching, invalidation, polling của rtk-query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      loginuser.middleware,
      dashboardApi.middleware,
      rtkQueryErrorLogger
    )
})

// Optional, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

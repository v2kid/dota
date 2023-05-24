import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'
import { CustomError } from 'utils/helpers'

export const blogApi = createApi({
  reducerPath: 'blogApi', // Tên field trong Redux state
  tagTypes: ['Posts'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders(headers) {
      headers.set('authorization', 'Bearer ABCXYZ')
      return headers
    }
  }),
  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
    getPosts: build.query<Post[], void>({
      query: () => 'blog/posts', // method không có argument

      providesTags(result) {
        if (result) {
          const final = [
            ...result.map(({ _id }) => ({ type: 'Posts' as const })),
            { type: 'Posts' as const, id: 'LIST' }
          ]
          return final
        }

        return [{ type: 'Posts', id: 'LIST' }]
      }
    }),

    addPost: build.mutation<string, Omit<Post, '_id'>>({
      query(body) {
        try {
          return {
            url: 'blog/postBlog',
            method: 'POST',
            body
          }
        } catch (error: any) {
          throw new CustomError(error.message)
        }
      },

      invalidatesTags: (result, error, body) => (error ? [] : [{ type: 'Posts', id: 'LIST' }])
    }),
    getPost: build.query<Post, string>({
      query: (id) => ({
        url: `posts/${id}`
      })
    }),
    updatePost: build.mutation<Post, { id: string; body: Post }>({
      query(data) {
        return {
          url: `posts/${data.id}`,
          method: 'PUT',
          body: data.body
        }
      },
      invalidatesTags: (result, error, data) => (error ? [] : [{ type: 'Posts', id: data.id }])
    }),
    deletePost: build.mutation<{}, string>({
      query(_id) {
        return {
          url: `blog/${_id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id: 'LIST' }]
    })
  })
})

export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi

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
      const token = localStorage.getItem('token')
      headers.set('authorization', `Bearer ${token}`)
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
            ...result.map(({ _id}) => ({ type: 'Posts' as const,  })),
            { type: 'Posts' as const, id: 'LIST' },
   
          ]
          return final
        }

        return [{ type: 'Posts', id: 'LIST' }]
      }
    }),
  
    addPost: build.mutation<Post, Omit<Post, '_id'>>({
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
    
    updatePost: build.mutation<Post, { id: string; body: Post }>({
      query(data) {
        return {
          url: `blog/${data.id}`,
          method: 'PUT',
          body: data.body
        }
      },
      
      // Trong trường hợp này thì getPosts sẽ chạy lại
      invalidatesTags: (result, error, data) => 
       (error ? [] : [{ type: 'Posts', id : 'A'}])
    }),
    deletePost: build.mutation<{}, string>({
      query(id) {
        return {
          url: `blog/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id: 'D' }]
    }),
    getPost: build.query<Post, string>({
      query: (id) => ({
        url: `blog/?id=${id}`,
      })
    }),
  })
  
})

export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi

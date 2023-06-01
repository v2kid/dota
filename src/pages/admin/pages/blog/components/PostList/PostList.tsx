import { useDeletePostMutation, useGetPostsQuery } from '../../blog.service'
import { startEditPost } from '../../blog.slice'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import PostItem from '../PostItem'
import SkeletonPost from '../SkeletonPost'

export default function PostList() {
  const [page,setPage] = useState(1)

  const next =()=>{
    setPage(page+1)
  }
  const prev =()=>{
    if (page > 1) {
      setPage((page) => page - 1);
    }
  }
  // isFetching là cho mỗi lần gọi API
  const { data, isLoading, isFetching } = useGetPostsQuery(page)
  console.log(data)
  const [deletePost] = useDeletePostMutation()
  const dispatch = useDispatch()
  // console.log(data, isLoading, isFetching)
  const startEdit = (id: string) => {
    dispatch(startEditPost(id))
  }

  const handleDeletePost = (id: string) => {
    deletePost(id)
  }

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'> Blog</h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
           Yesterday is history, tormorrow is mystery, but today is a gift, that why we call it's a present
          </p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {isFetching && (
            <Fragment>
              <SkeletonPost />
              <SkeletonPost />
            </Fragment>
          )}
          {!isFetching &&
            data?.map((post) => (
              <PostItem key={post._id} post={post} startEdit={startEdit} handleDeletePost={handleDeletePost} />
            ))}
        </div>
    <div>
 
</div>
 
  <div>
  <a onClick={prev} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Previous
  </a>
  {/* Next Button */}
  <a onClick={next} className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
  </a>
</div>
      </div>
    </div>
  )
}

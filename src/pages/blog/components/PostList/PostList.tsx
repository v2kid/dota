
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from '../PostItem'
import SkeletonPost from '../SkeletonPost'
import { Post } from 'types/blog.type'
import { useDeletePostMutation, useGetPostQuery, useGetPostsQuery } from 'pages/admin/pages/blog/blog.service'
import { detailid, startEditPost } from 'pages/admin/pages/blog/blog.slice'
import { RootState } from 'store'
import Detailpost from '../DetailPost'


export default function PostList() {
  // isLoading chỉ dành cho lần fetch đầu tiên
  // isFetching là cho mỗi lần gọi API
  const [page, setPage] = useState(1)
  const [per_page, setPer_page] = useState(4)
  const { data, isLoading, isFetching } = useGetPostsQuery(page)
  const [deletePost] = useDeletePostMutation()
  const dispatch = useDispatch()
  const next =()=>{
    setPage(page+1)
  }
  const prev =()=>{
    if (page > 1) {
      setPage((page) => page - 1);
    }
  }
  // console.log(data, isLoading, isFetching)
  const startEdit = (id: string) => {
    dispatch(startEditPost(id))
  }
  const detailPost =(id: string)=>{
    dispatch(detailid(id))
  }
  const handleDeletePost = (id: string) => {
    deletePost(id)
  }
  const postId = useSelector((state : RootState) =>state.blog.postId)
  const {  refetch } = useGetPostQuery(postId, {
      skip: !postId,
    })

  return (
<section className="bg-white dark:bg-gray-600">
  <div className="container px-6 py-10 mx-auto">

      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'> Blogs</h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            "Yesterday is history, tomorrow is mystery, but today is a gift, that why we call it's present"
          </p>
        </div>
        {Boolean(postId) && (
          <Fragment>
           <Detailpost />
          </Fragment>
        )}
        {!Boolean(postId) && (
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {isFetching && (
            <Fragment>
              <SkeletonPost />
              <SkeletonPost />
            </Fragment>
          )}
          {!isFetching &&
            data?.map((post: Post) => (
              <PostItem key={post._id} post={post} detailPost={detailPost} handleDeletePost={handleDeletePost} />
              
            ))}
            <button onClick={prev}>
        Previous
      </button>
      <button onClick={next} >
        Next
      </button>
        </div>
        )}
      </div>
      </div>
      </section>
  )
}

import { Post } from 'types/blog.type'

interface PostItemProps {
  post: Post
  startEdit: (id: string) => void
  handleDeletePost: (id: string) => void
}

export default function PostItem(props: PostItemProps) {
  const { post } = props
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src={post.featuredImage}
          loading='lazy'
          alt={post.title}
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>{post.publishDate}</span>
        <h2 className='text-xl font-bold text-gray-800'>{post.title}</h2>
        <p className='text-gray-500'>{post.description}</p>
        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
          </div>
        </div>
      </div>
    </div>
  )
}

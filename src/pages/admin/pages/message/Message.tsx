import DefaultLayout from 'pages/admin/layout/defaultLayout'
import { useGetContactsQuery } from '../dashboard/dashboard.service'
import { Fragment } from 'react'
import { Contact } from 'types/contact.type'

export default function Message() {
  const { data, isFetching } = useGetContactsQuery()
  console.log(data)
  return (
    <DefaultLayout>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead>
          <tr>
            <th className='bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500'>
              <div className='flex cursor-pointer'>
                <span className='mr-2'>Name</span>
              </div>
            </th>
            <th className='bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500'>
              <div className='flex cursor-pointer'>
                <span className='mr-2'>Email</span>
              </div>
            </th>
            <th className='bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500'>
              <div className='flex cursor-pointer'>
                <span className='mr-2'>Message</span>
              </div>
            </th>
            <th className='bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500'>
              <div className='flex cursor-pointer'>
                <span className='mr-2'>Phone Number</span>
              </div>
            </th>
            <th className='bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500'>
              <div className='flex cursor-pointer'>
                <span className='mr-2'>ACTION</span>
              </div>
            </th>
          </tr>
        </thead>
        {!isFetching &&
          data?.map((Contact) => (
            <tbody className='divide-y divide-gray-200 bg-white'>
              <tr>
                <td className='whitespace-no-wrap px-6 py-4 text-sm leading-5'>
                  <p>{Contact.title}</p>
                  <p className='text-xs text-gray-400'>{Contact.message}</p>
                </td>
                <td className='whitespace-no-wrap px-6 py-4 text-sm leading-5'>
                  <p>{Contact.email}</p>
                  <p>{Contact.createDate}</p>
                </td>
                <td className='whitespace-no-wrap px-6 py-4 text-sm leading-5'>
                  <p>{Contact.phonenumber}</p>
                </td>
                <td className='whitespace-no-wrap px-6 py-4 text-sm leading-5'>
                  <div className='flex text-green-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-1 h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    {Contact.status === 'pending' && <p>Active</p>}
                    {Contact.status === 'done' && <p>a</p>}
                  </div>
                </td>
                <td className='whitespace-no-wrap px-6 py-4 text-sm leading-5'>
                  <div className='flex space-x-4'>
                    <a href='#' className='text-blue-500 hover:text-blue-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1 h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                        />
                      </svg>
                      <p>Edit</p>
                    </a>
                    <a href='#' className='text-red-500 hover:text-red-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1 ml-3 h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                      <p>Delete</p>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </DefaultLayout>
  )
}

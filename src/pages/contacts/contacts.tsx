import { useAddMessageMutation } from 'pages/admin/pages/dashboard/dashboard.service'
import Header from 'pages/components'
import Footer from 'pages/components/Footer'
import { Fragment, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { Contact } from 'types/contact.type'
import { isEntityError } from 'utils/helpers'
type FormError =
  | {
      [key in keyof typeof initialState]: string
    }
  | null
const initialState: Omit<Contact, '_id'> = {
  email: '',
  title: '',
  phonenumber: '',
  message: '',
  status: 'pending',
  createDate: new Date().toString()
}
export default function Contacts() {
  const [addContact, addContactresult] = useAddMessageMutation()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await addContact(formcontact).unwrap()
      toast.success('success')
      setFormcontact(initialState)
    } catch (error) {
      console.log(error)
    }
  }
  const [formcontact, setFormcontact] = useState<Omit<Contact, '_id'>>(initialState)
  const errorForm: FormError = useMemo(() => {
    const errorResult = addContactresult.error
    if (isEntityError(errorResult)) {
      return errorResult.data.error as FormError
    }
    return null
  }, [addContactresult])
  return (
    <div className='flex h-screen max-h-full flex-col'>
      <Header />
      <section className='max-h-full flex-grow bg-white pt-5  dark:bg-gray-600 '>
        <div className='mx-auto max-w-screen-md py-8 px-4 lg:py-16 '>
          <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
            Contact Us
          </h2>
          <p className='mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let
            us know.
          </p>
          <form onSubmit={handleSubmit} className='space-y-8'>
            <div>
              <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                Your email
              </label>
              <input
                value={formcontact.email}
                onChange={(event) => setFormcontact((prev) => ({ ...prev, email: event.target.value }))}
                type='email'
                id='email'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div>
              <label htmlFor='subject' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                Title
              </label>
              <input
                value={formcontact.title}
                onChange={(event) => setFormcontact((prev) => ({ ...prev, title: event.target.value }))}
                type='text'
                id='subject'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div>
              <label htmlFor='subject' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                Phone +84
              </label>
              <input
                value={formcontact.phonenumber}
                onChange={(event) => setFormcontact((prev) => ({ ...prev, phonenumber: event.target.value }))}
                type='text'
                id='subject'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='message' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'>
                Your message
              </label>
              <textarea
                value={formcontact.message}
                onChange={(event) => setFormcontact((prev) => ({ ...prev, message: event.target.value }))}
                id='message'
                rows={6}
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                placeholder='Leave a comment...'
                defaultValue={''}
              />
            </div>
            <button
              type='submit'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg py-3 px-5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit'
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

import DefaultLayout from 'pages/admin/layout/defaultLayout'
import { useGetContactsQuery } from './dashboard.service'
import { useAppSelector } from 'hook'
import { useState } from 'react'

export default function Dashboard() {
  const auth = useAppSelector((state) => state.loginUser)
  // const { data, isError } = useGetUsersQuery()
  const [isItem, setisitem] = useState('dashboar')
  return (
  <DefaultLayout>
  </DefaultLayout>
  )
}

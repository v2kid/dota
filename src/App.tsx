import Blog from 'pages/admin/pages/blog'
import Home from 'pages/home'
import Pagenotfound from 'pages/404'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Login from 'pages/login'
import Register from 'pages/register'
import Dashboard from 'pages/admin/pages/dashboard'
import Blogshow from 'pages/blog'
import ProtectedRoute, { ProtectedRouteProps } from 'utils/protected'
import { useAppSelector } from 'hook'
import Contacts from 'pages/contacts'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Message from 'pages/admin/pages/message'
import Footer from 'pages/components/Footer'
// const token =  useAppSelector((state)=>state.usertoken.token)

function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: localStorage.getItem('token'),
    authenticationPath: '/login',
  };

  return (
    <Fragment>
      <ToastContainer />
        <Routes>
        <Route path='admin' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />} />
        <Route path='admin/blog' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Blog />} />} />
        <Route path='admin/contacts' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Message />} />} />
        <Route path='blog' element={<Blogshow />} />
        <Route path='contacts' element={<Contacts/>} />
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes> 
    </Fragment>
  )
}

export default App

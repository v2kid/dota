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

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
      <Route path='blog' element={<Blogshow />} />
        <Route path='admin' element={<Dashboard />} />
        <Route path='admin/blog' element={<Blog />} />
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>   
    </Fragment>
  )
}

export default App

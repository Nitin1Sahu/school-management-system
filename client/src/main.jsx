import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { About, Admission, Contact, Galary, Home, Signin } from './pages'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='galary' element={<Galary />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='admission' element={<Admission />} />
      <Route path='sign-in' element={<Signin />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)

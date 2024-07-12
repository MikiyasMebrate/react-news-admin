import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './assets/css/styles.min.css'
import './assets/images/logos/favicon.png'




import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/ui/Header.jsx'
import NavBar from './components/ui/NavBar.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetail from './pages/BlogDetail.jsx'
import PageForms from './components/PageForms.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <> <NavBar /> <Header /> </>,
    children : [
      {
        path : '/blog',
        element : <Blog />
      },
      {
        path : '/blog/:blogId',
        element : <BlogDetail />
      },
      {
        path : '/forms',
        element : <PageForms />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

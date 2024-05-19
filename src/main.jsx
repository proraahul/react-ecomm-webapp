import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './pages/about/index.jsx'
import DetailPage from './pages/details/index.jsx'
import HomePage from './pages/homepage/index.jsx'
import Listing from './pages/listing/index.jsx'
import ErrorPage from './pages/notFound/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App />,
    children:[
      {path: '/', element: <HomePage />},
      {path: '/listing', element: <Listing />},
      {path: '/details', element: <DetailPage />},
      {path: '*', element: <ErrorPage />},
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './pages/about/index.jsx'
import HomePage from './pages/homepage/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App />,
    children:[
      {path: '/', element: <HomePage />},
      {path: '/about', element: <About />},
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

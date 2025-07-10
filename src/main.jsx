import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Shop from './components/Shop.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'


const routesConfig =  [{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    
    children: [
      {index: true,
        element: <Home />
      },
      {
        path: "shop",
        element:  <Shop />
      },
      {
      path: "home",
      element: <Home />
      }
    ]
  
  }]
const router = createBrowserRouter(
  routesConfig
)
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)*/

export default routesConfig

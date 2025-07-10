import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import routesConfig from "./routes"
import './index.css'



const router = createBrowserRouter(
  routesConfig
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

export default routesConfig

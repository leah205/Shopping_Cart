import App from './App.jsx'
import Shop from './components/Shop.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import React from 'react'
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
  export default routesConfig
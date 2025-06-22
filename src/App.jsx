import { useState } from 'react'
import {Outlet} from "react-router-dom"

import React from "react"
import Nav from './components/Nav'
import {createGlobalStyle} from 'styled-components'



const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box
}

#root{

height: 100vh
}




`;
function App() {
  

  return (
    <>
    <GlobalStyles />
     <Nav />
      <Outlet />
   
    
     </>
  )
}

export default App

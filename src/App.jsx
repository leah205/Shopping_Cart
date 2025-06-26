import { useState } from 'react'
import {Outlet} from "react-router-dom"

import React from "react"
import Nav from './components/Nav'
import {createGlobalStyle} from 'styled-components'
//count value cannot be negative
//api fetch every time shop visited
//new font
//description and rating
//add keys to api items


const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
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

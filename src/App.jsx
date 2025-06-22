import { useState } from 'react'
import {Outlet} from "react-router-dom"
import './App.css'
import React from "react"
import Nav from './components/Nav'

function App() {
  

  return (
    <>
     <Nav />
      <Outlet />
    </>
  )
}

export default App

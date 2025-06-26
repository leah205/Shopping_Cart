
import {Outlet} from "react-router-dom"

import React from "react"
import Nav from './components/Nav'
import {createGlobalStyle} from 'styled-components'
import {useEffect, useState} from "react"

//new font
//description and rating
//add keys to api items
//onchange


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

const useStoreItems = () => {
    const [items, setItems ] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
     useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
        .then(response => {
            if(response.status >= 400){
                throw new Error("server error")
            }
            return response.json()})
        .then(response => setItems(response))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, [])
    console.log(items)
    return {items, error, loading}
}



function App() {
  const {items, error, loading} = useStoreItems()
  

  return (
    <>
    <GlobalStyles />
     <Nav />
      <Outlet context = {[items, error, loading]}/>
   
    
     </>
  )
}

export default App


import {Outlet} from "react-router-dom"

import React from "react"
import Nav from './components/Nav'
import {createGlobalStyle} from 'styled-components'
import {useEffect, useState} from "react"
import "./App.css"
import Cart from './components/Cart'

//update shopping cart when add to cart is clicked


const GlobalStyles = createGlobalStyle`

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
  const [cartItems, setCartItems] = useState({})
  const [shoppingModal, setShoppingModal] = useState(false)
  
  function addItemsToCart(item, count){

    let newCartItems = {...cartItems}
    if (item in newCartItems){
        newCartItems[item] += count
    } else {
        newCartItems[item] = count
    }
    setCartItems(newCartItems)
    console.log(cartItems)
  }

  return (
    <>
    <GlobalStyles />
     <Nav cartItems = {cartItems} setShoppingModal = {setShoppingModal}/>
     {shoppingModal && <Cart items = {cartItems} ></Cart>}
      <Outlet context = {[items, error, loading, addItemsToCart]}/>
   
    
     </>
  )
}

export default App


import {Outlet} from "react-router-dom"

import React from "react"
import Nav from './components/Nav'
import {createGlobalStyle} from 'styled-components'
import {useEffect, useState} from "react"
import "./App.css"
import Cart from './components/Cart'



//add total cost
//does not add to cart if 0 items


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
  
    return {items, error, loading}
}



function App() {
  const {items, error, loading} = useStoreItems()
  const [cartItems, setCartItems] = useState([])
  const [shoppingModal, setShoppingModal] = useState(false)
  function getItemCount(){
    return cartItems.reduce((acc, cur) => {
        return acc + cur.count
    }, 0);
  }

  function getItemCost(){
    return cartItems.reduce((acc, cur) => {
      return acc + cur.count * cur.price
    }, 0)
  }

  let itemCount =  (cartItems.length)? getItemCount(): 0;
  let itemCost = (cartItems.length)? getItemCost(): 0;
  function deleteItemsFromCart(id){
    let newCartItems = cartItems.filter((item) => item.id != id)
    setCartItems(newCartItems)
  }

  function checkoutCart(){
    setCartItems([]);
    setShoppingModal(false)
  }
  
  function addItemsToCart(details){
    
    let newCartItems = [...cartItems]
    //check for id
    let item = newCartItems.find((item) => item.id == details.id)
   
    if(item){
        item.count += details.count
    }else {
      
        newCartItems.push(details)
    }
   
    setCartItems(newCartItems)
     }

  return (
    <>
    <GlobalStyles />
     <Nav itemCount = {itemCount} setShoppingModal = {setShoppingModal}/>
     {shoppingModal && <Cart 
     items = {cartItems} 
     setModal = {setShoppingModal} 
     deleteItem = {deleteItemsFromCart}
     checkout = {checkoutCart}
     totalCost = {itemCost} ></Cart>}
      <Outlet context = {[items, error, loading, addItemsToCart]}/>
   
    
     </>
  )
}

export default App

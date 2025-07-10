import styled from "styled-components"
import Item from "./Item"
import { useOutletContext } from "react-router-dom"
import React from "react"


const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin: 20px 50px;
    align-content: center;
   `
export default function Shop(){
   console.log('hello')
   const [items, error, loading, addItemsToCart] = useOutletContext();
   
   if (error){
    return <h1>Server error</h1>
   }
   if (loading){
    return <h1>Loading...</h1>
   }
   if (!items.length){
    return <h1>Shop empty. Come back later!</h1>
   }

   
    return <>
   
    <ItemContainer data-testid = "item-container">{
    
    items.map((item) => {
        return <Item 
        price = {item.price}
        image = {item.image}
        title = {item.title}
        key = {item.id}
        id = {item.id}
        addItemsToCart = {addItemsToCart}
    ></Item>
    })}</ItemContainer>
    
    
    </>
}
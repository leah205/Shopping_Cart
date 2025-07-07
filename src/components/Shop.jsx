import styled from "styled-components"
import Item from "./Item"
import { useOutletContext } from "react-router-dom"


const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    margin-top: 20px;
    align-content: center;
   `
export default function Shop(){
   
   const [items, error, loading, addItemsToCart] = useOutletContext();
   
   if (error){
    return <h1>Server error</h1>
   }
   if (loading){
    return <h1>Loading...</h1>
   }

   
    return <>
   
    <ItemContainer>{
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
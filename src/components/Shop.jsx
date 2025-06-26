import styled from "styled-components"
import Item from "./Item"
import { useOutletContext } from "react-router-dom"


const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;`
export default function Shop(){
   
   const [items, error, loading] = useOutletContext();
   
   if (error){
    return <h1>Server error</h1>
   }
   if (loading){
    return <h1>Loading...</h1>
   }

   
    return <>
    <h1>Shop</h1>
    <ItemContainer>{
    items.map((item) => {
        return <Item 
        description={item.description}
        price = {item.price}
        rating = {item.rating}
        image = {item.image}
        title = {item.title}
        key = {item.id}
    ></Item>
    })}</ItemContainer>
    
    
    </>
}
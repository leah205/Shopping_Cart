import styled from "styled-components"
import Item from "./Item"
import { useEffect, useState } from "react"

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


const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;`
export default function Shop(){
   const {items, error, loading} = useStoreItems();
   
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
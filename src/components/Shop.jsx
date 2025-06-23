import styled from "styled-components"
import Item from "./Item"

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;`
export default function Shop(){
    return <>
    <h1>Shop</h1>
    <ItemContainer><Item></Item></ItemContainer>
    
    
    </>
}
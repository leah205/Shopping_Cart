import styled from "styled-components"
import {useState} from "react"

const ItemImg = styled.img`
   
    margin: auto;
    display: block;
    width: 100px;
`

const StyledNumberBtn = styled.button`
    background: ${props => props.$decrement? "red" : "green"};
    border: 0;
    width: 30px;
    height: 30px;
    color: white;
`
const ItemCard = styled.div`
    width: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 3px 5px 5px gray;
    padding: 10px;
`
const SelectAmountSection = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    `
const ItemInput = styled.input`
    width: 100px;
`

function ItemNumberBtn({children, $decrement, updateCount}){
    const handleClick = () => {
         if($decrement){
            updateCount('decrement')
        } else {
            updateCount('increment')
        }
    }
    return <StyledNumberBtn onClick = {handleClick} $decrement = {$decrement} >{children}</StyledNumberBtn>
}


export default function Item({id, title, price, description, image, rating, addItemsToCart}){ 
    const [countValue, setCountValue] = useState(0)
    const handleCountClick = (type) => {
        if(type == 'decrement'){
            if (countValue == 0){
                return
            }
            setCountValue(countValue - 1)
        } else{
            setCountValue(countValue + 1)
        }
    }

    function clickAddToCart(){
        let details = {title: title, count: countValue, image:image, price: price, id: id}
        addItemsToCart(details)
        setCountValue(0)
    }
    
    return <>
        <ItemCard>
            <ItemImg src = {image}></ItemImg>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p>
           <p>{rating.rate} by {rating.count}</p>
            <SelectAmountSection>
                <ItemNumberBtn $decrement = {true} count = {countValue} updateCount = {handleCountClick}>-</ItemNumberBtn>
                <ItemInput type = "number" 
                value = {countValue} 
                onChange = {(event) => setCountValue(event.target.value)}></ItemInput>
                <ItemNumberBtn $increment = {true} count = {countValue} updateCount = {handleCountClick}>+</ItemNumberBtn>
                
            </SelectAmountSection>
            
            
            <button onClick = {clickAddToCart}>Add to Cart</button>
        </ItemCard>
    </>
}
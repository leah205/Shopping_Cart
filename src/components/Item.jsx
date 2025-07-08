import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import {useState} from "react"


const ItemImg = styled.img`
   
    margin: auto;
    display: block;
    height: 100px;
`

const StyledNumberBtn = styled.button`
    color: ${props => props.$decrement? "rgb(169, 30, 30)" : "rgb(5, 118, 31)"};
    border: 0;
    background: none;
   border-radius: 50%;
   height: 30px;
   width: 30px;
    font-size: 1.3rem;
  
   &:hover{
     background: rgb(227, 227, 227);


     }
`
const ItemCard = styled.div`
    width: 250px;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 3px 5px 5px gray;
    padding: 10px;
    height: 300px;
    text-align: center;
    align-items: center;
   
`
const SelectAmountSection = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    `
const ItemInput = styled.p`
    border:0;
    text-align: center;
    width:20px;
    margin-top: 4px;
`
const StyledCartButton = styled.button`
    background: navy;
    color: white;
    border: 0;
    padding: 5px 10px;
    border-radius: 2px;
    &:hover{
    background: rgb(3, 0, 82)}
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


export default function Item({id, title, price,  image,  addItemsToCart}){ 
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
        if(countValue == 0) return;
        let details = {title: title, count: countValue, image:image, price: price, id: id}
        
        addItemsToCart(details)
        setCountValue(0)
    }
    
    return <>
        <ItemCard>
            <div>
            <ItemImg src = {image}></ItemImg>
            <h4>{title}</h4>
            <p>${price}</p>
            </div>
          
         <div>
            <SelectAmountSection>
                <ItemNumberBtn $decrement = {true} count = {countValue} updateCount = {handleCountClick}>-</ItemNumberBtn>
                <ItemInput type = "number" 
                onChange = {(event) => setCountValue(event.target.value)}>
                    {countValue}
                </ItemInput>
                <ItemNumberBtn $increment = {true} count = {countValue} updateCount = {handleCountClick}>+</ItemNumberBtn>
            </SelectAmountSection>
            <StyledCartButton onClick = {clickAddToCart}>Add to Cart</StyledCartButton>
            </div>
        </ItemCard>
    </>
}

Item.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    addItemsToCart: PropTypes.func
}

ItemNumberBtn.propTypes = {
    children: PropTypes.node,
    $decrement: PropTypes.bool,
    updateCount: PropTypes.func,
}
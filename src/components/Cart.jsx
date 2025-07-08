import styled from "styled-components"
import {React} from "react"
import PropTypes from "prop-types"

const StyledCartModal = styled.div`
position: absolute;
z-index: 100;
  left: 50%;
  top: calc(50% + 50px);
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 15px;
  min-height: 100px;
  width: 500px;
  border: 1px solid gray;
  box-shadow: 3px 5px 5px gray;
  padding: 20px;
    display: flex;
    flex-direction: column;
     @media (max-width: 600px){
    width: 90vw;
    font-size: 0.8rem;
    }
`
const StyledCloseModalBtn = styled.button`
    border:0;
    background: rgb(169, 30, 30);;
    border-radius: 50%;
    color: white;
    text-align: center;
    height: 30px;
    width: 30px;
    margin-left: auto;
    margin-bottom: 10px;
`

const ProductImage = styled.img`
    max-height: 100px
`
const DeleteButton = styled.button`
    padding: 5px 10px;
    background: rgb(169, 30, 30);
    color: white;
    border:0;
    border-radius: 5px;
    height: 30px;
    font-size: 1.1em;
`
const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`
const LeftItemContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;`
const DetailsContainer = styled.div`
    height: fit-content;
`
const CheckoutButton = styled.button`
    border:0;
    background: navy;
    border-radius: 3px;
    color: white;
    width: 200px;
    height: 50px;
    margin: 15px auto;
`
const StyledTotalCost = styled.p`
    color: green;
    text-align: center;
`



export default function Cart({items, setModal, deleteItem, checkout, totalCost}){
   
    return <StyledCartModal>
        <StyledCloseModalBtn onClick = {() => setModal(false)}>x</StyledCloseModalBtn>
        {
        items.map((item) => {
            return (<ItemContainer key = {item.id}>
                <LeftItemContainer>
             <ProductImage src={item.image} alt="" />
            <DetailsContainer>
            <p >{item.title}</p>
            <p>Quantity: {item.count}</p>
            <p>${item.price}</p>
            </DetailsContainer>
            </LeftItemContainer>
            <DeleteButton onClick = {() => deleteItem(item.id)}>delete</DeleteButton>
         
            </ItemContainer>
        
        )
        })
        }
        {items.length? <StyledTotalCost>${totalCost.toFixed(2)}</StyledTotalCost>: null}
        {items.length? <CheckoutButton onClick = {checkout}>Checkout</CheckoutButton> : 
        <h3>No Items In Cart</h3>

        }
        </StyledCartModal>
}

Cart.propTypes = {
    items: PropTypes.array,
    setModal: PropTypes.bool,
    deleteItem: PropTypes.func,
    checkout: PropTypes.func,
    totalCost: PropTypes.number
}
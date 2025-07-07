import styled from "styled-components"

const StyledCartModal = styled.div`
position: absolute;
z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 15px;
  height: 500px;
  width: 500px;
  border: 1px solid gray;
  box-shadow: 3px 5px 5px gray;
  padding: 20px;
    display: flex;
    flex-direction: column;
`
const StyledCloseModalBtn = styled.button`
    border:0;
    background: red;
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
    height: 30px;
    width: 30px;
    background: red;
    color: white;
    border:0;
    border-radius: 50%;
    font-size: 1.2em;
`
const TopItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const CheckoutButton = styled.button`
    border:0;
    background: blue;
    color: white;
    width: 200px;
    height: 50px;
`



export default function Cart({items, setModal, deleteItem, checkout}){
    console.log(items)
    return <StyledCartModal>
        <StyledCloseModalBtn onClick = {() => setModal(false)}>x</StyledCloseModalBtn>
        {
        items.map((item) => {
            return (<div key = {item.id}>
            <TopItemContainer>
            <p >{item.title}: {item.count}</p>
            <DeleteButton onClick = {() => deleteItem(item.id)}>-</DeleteButton>
            </TopItemContainer>
            <p>{item.price}</p>
            <ProductImage src={item.image} alt="" />
            </div>
        
        )
        })
        }
        {items.length? <CheckoutButton onClick = {checkout}>Checkout</CheckoutButton> : 
        <h3>No Items In Cart</h3>

        }
        </StyledCartModal>
}
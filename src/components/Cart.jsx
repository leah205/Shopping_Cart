import styled from "styled-components"

const StyledCartModal = styled.div`
position: absolute;
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
`

const ProductImage = styled.img`
    max-height: 100px
`


export default function Cart({items, setModal}){
    console.log(items)
    return <StyledCartModal>
        <StyledCloseModalBtn onClick = {() => setModal(false)}>x</StyledCloseModalBtn>
        {
        items.map((item) => {
            return (<div key = {item.id}>
            <p >{item.title}: {item.count}</p>
            <p>{item.price}</p>
            <ProductImage src={item.image} alt="" />
            </div>
        
        )
        })
        }</StyledCartModal>
}
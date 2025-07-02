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


export default function Cart({items, setModal}){
    return <StyledCartModal>
        <StyledCloseModalBtn onClick = {() => setModal(false)}>x</StyledCloseModalBtn>
        {
        Object.entries(items).map(([item, count]) => {
            return (<p>{item}: {count}</p>)
        })
        }</StyledCartModal>
}
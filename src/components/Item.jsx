import styled from "styled-components"

const ItemImg = styled.img`
   
    margin: auto;
    display: block;
    width: 100px;
`

const ItemNumberBtn = styled.button`
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
export default function Item(){
    return <>
        <ItemCard>
            <ItemImg src = "https://m.media-amazon.com/images/I/911n4nIhnpL._UY1000_.jpg"></ItemImg>
            <h2>Shirt</h2>
            <p>$500</p>
            <SelectAmountSection>
                <ItemNumberBtn $decrement>-</ItemNumberBtn>
                <ItemInput type = "number"></ItemInput>
                <ItemNumberBtn $increment>+</ItemNumberBtn>
                
            </SelectAmountSection>
            
            
            <button>Add to Cart</button>
        </ItemCard>
    </>
}
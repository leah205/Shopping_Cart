import styled from "styled-components"
import storeSrc from "../assets/store.jpg"
import Button from "./Button"
import {Link} from "react-router-dom"

/*let StoreImg = styled.img`
    width: 60vw;
    margin: auto;
    display: block

`*/

let Wrapper = styled.div`
    width: 100vw
`
let PageHeader = styled.h1`
    font-size: 2rem;
    color: navy;
    margin: auto;
    margin-top:15px;
    text-align: center;
`

let Description = styled.div`
    background-image: url(${storeSrc});
    width: 60vw;
    height: 60vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    border-radius: 10px;
`
let DescriptionText = styled.div`
    height: fit-content;
    font-size:1.2rem;
    background: black;
    opacity: 75%;
    color: white;
    width: 80%;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
`

export default function Home(){
    return <>
    <Wrapper>
        <PageHeader>Welcome to Shopping Cart</PageHeader>
    <Description>
        <DescriptionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam laborum. Eaque similique voluptatibus obcaecati pariatur rem impedit neque! Modi, voluptates itaque. Numquam accusamus aliquam, natus quos blanditiis laborum laudantium!
   </DescriptionText>
    </Description>
    <Button as = {Link} to = "/shop">Shop Now</Button>
    </Wrapper>
    </>
}
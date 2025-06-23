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

let Description = styled.div`
    background-image: url(${storeSrc});
    width: 60vw;
    height: 60vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px auto;
`
let DescriptionText = styled.div`
    height: 200px;
    background: black;
    opacity: 75%;
    color: white;
    width: 80%;
    margin: auto;
    padding: 50px;
    border-radius: 10px;
`

export default function Home(){
    return <>
    <Wrapper>
    <Description>
        <DescriptionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet asperiores excepturi? Odit vero incidunt consequatur aperiam molestiae voluptates beatae, quisquam velit earum accusamus maxime suscipit. Mollitia consequatur illo molestias.
   </DescriptionText>
    </Description>
    <Button as = {Link} to = "/shop">Shop Now</Button>
    </Wrapper>
    </>
}
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cartSrc from "../assets/cart.svg"
import PropTypes from "prop-types";

const StyledNav = styled.nav`
    display: flex;
    list-style-type: none;
    text-decoration: none;
    width: 100vw;
    background: navy;
    align-items: center;
    padding: 0px 15px;
`

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content:space-between;
    width:100%;
    align-items: center;
    div{
    display:flex;
    align-items: center;

    }
    
`
const StyledLink = styled.li`
    &:hover{
    background: rgb(149, 149, 178);;
}
    height: 100%;
    padding: 5px;
    color: rgb(173, 173, 255);
`


const StyledCartButton = styled.div`
    background: none;
    border: 0;

    img{
    height: 40px}
`

function CartButton({ItemCount, handleClick}){
   console.log(ItemCount)
    return <StyledCartButton onClick = {() => handleClick(true)}>
        <p>{ItemCount}</p>
        <img src= {cartSrc} alt="cart" />
    </StyledCartButton>
}

CartButton.propTypes = {
    ItemCount: PropTypes.number,
    handleClick: PropTypes.func
}



export default function Nav({itemCount,  setShoppingModal}){
    console.log(itemCount)
    return (
        <StyledNav>
            <NavList>
                <div>
                <StyledLink><Link to = "home">Home</Link></StyledLink>
                <StyledLink><Link to = "shop">Shop </Link></StyledLink>
                </div>
                <StyledLink><CartButton 
                ItemCount = {itemCount}
                handleClick = {setShoppingModal}
                ></CartButton></StyledLink>

            </NavList>
            
        </StyledNav> )
}

Nav.propTypes = {
    itemCount: PropTypes.number,
    setShoppingModal: PropTypes.func
}


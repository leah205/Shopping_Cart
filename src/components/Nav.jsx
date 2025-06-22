import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    list-style-type: none;
    text-decoration: none;
    width: 100vw;
    background: navy;
`

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
`
const StyledLink = styled.li`
    &:hover{
    background: white;
}
    height: 100%;
    padding: 20px;

`


export default function Nav(){
    return (
        <StyledNav>
            <NavList>
                <StyledLink><Link to = "home">Home</Link></StyledLink>
                <StyledLink><Link to = "shop">Shop </Link></StyledLink>
            </NavList>
            
        </StyledNav> )
    
    
}


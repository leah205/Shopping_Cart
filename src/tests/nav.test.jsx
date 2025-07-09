import React from "react";
import {render, screen} from '@testing-library/react'
import { describe, expect, it, vi } from "vitest";
import Nav from "../components/Nav"
import Item from "../components/Item"
import {BrowserRouter} from 'react-router-dom';
const noop = () => {}
describe("nav", ()=> {
    it("renders properly", () => {
    
         let nav = render(
            <BrowserRouter> <Nav></Nav></BrowserRouter>
        
        )
         expect(nav).toMatchSnapshot()
    });
    it("item count displays next to cart button", () => {
        render(<BrowserRouter><Nav itemCount = {3} setShoppingModal = {noop}></Nav></BrowserRouter>)
        const itemCount = screen.getByTestId("item-count")
        expect(itemCount.textContent).toBe("3")
    })
    
})
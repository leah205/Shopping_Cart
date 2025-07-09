import React from "react";
import {render, screen} from '@testing-library/react'
import Item from '../components/Item'
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter, Outlet } from 'react-router-dom';
import Shop from "../components/Shop"
import RenderRouteWithOutletContext  from '../components/renderRouteWithOutletContext';

const addItemsToCart = vi.fn()

let itemData = [
    {
        price: 3,
        image: "boot.png",
        title: "boots",
        id: 1,
    },
    {
        price: 10,
        image: "shirt.png",
        title: "shirt",
        id: 2,
    },
]


vi.mock('../components/Item', () => ({
    default: ({title}) => (
        <div data-testid = "item">
        <p >{title}</p>
        </div>
    )
    }) 
)




describe("shop", () => {
    it("renders error message", () => {
          render(<RenderRouteWithOutletContext context={[itemData, true, false, addItemsToCart]}>
        <Shop />
      </RenderRouteWithOutletContext>)
        expect(screen.getByRole("heading", {name: "Server error"})).toBeInTheDocument()
        expect(screen.queryAllByTestId().length).toBe(0)
    })
    it("renders laoding message", () => {
          render(<RenderRouteWithOutletContext context={[itemData, false, true, addItemsToCart]}>
        <Shop />
      </RenderRouteWithOutletContext>)
        expect(screen.getByRole("heading", {name: "Loading..."})).toBeInTheDocument()
        expect(screen.queryAllByTestId().length).toBe(0)
    })
    it("renders shop empty heading", () => {
          render(<RenderRouteWithOutletContext context={[[], false, false, addItemsToCart]}>
        <Shop />
      </RenderRouteWithOutletContext>)
        expect(screen.getByRole("heading", {name: "Shop empty. Come back later!"})).toBeInTheDocument()
        expect(screen.queryAllByTestId().length).toBe(0)
    })
    it("renders only error", () => {
          render(<RenderRouteWithOutletContext context={[[], true, true, addItemsToCart]}>
        <Shop />
      </RenderRouteWithOutletContext>)
        expect(screen.getByRole("heading", {name: "Server error"})).toBeInTheDocument()
        expect(screen.queryAllByRole("heading").length).toBe(1)
    })
    it("renders item list", () => {
        render(<RenderRouteWithOutletContext context={[itemData, false, false, addItemsToCart]}>
        <Shop />
      </RenderRouteWithOutletContext>)
        expect(screen.queryAllByTestId("item").length).toBe(2)
        
    })
})
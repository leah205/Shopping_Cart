import React from "react";
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Item from '../components/Item'
import { describe, expect, it, vi } from "vitest";
import Cart from "../components/Cart"

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


describe("cart", () => {
    it("displays items and checkout button", () => {
        render(<Cart items = {itemData} totalCost = {10}></Cart>)
        expect(screen.queryAllByTestId("item").length).toBe(2)
        expect(screen.queryAllByTestId("title")[0].textContent).toBe("boots")
        expect(screen.getByRole("button", {name: "Checkout"})).toBeInTheDocument()
        expect(screen.getByTestId("cost").textContent).toBe("$10.00")
    })
    it("displays only message if cart is empty", () => {
        render(<Cart items = {[]} totalCost = {10}></Cart>)
         expect(screen.queryAllByTestId("item").length).toBe(0)
        expect(screen.queryByRole("button", {name: "Checkout"})).not.toBeInTheDocument()
        expect(screen.queryByTestId("cost")).not.toBeInTheDocument()
        expect(screen.getByRole("heading", {name: "No Items In Cart"})).toBeInTheDocument()
    })
})

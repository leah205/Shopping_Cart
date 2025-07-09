import React from "react";
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Item from '../components/Item'
import { describe, expect, it, vi } from "vitest";

const addItemsToCart = vi.fn()

describe("item", () => {
    it("renders item correctly", () => {
        render(<Item
        id = {1}
        title = {"boots"}
        price = {3}
        image = {"hello.png"}
        addItemsToCart = {addItemsToCart}
        >
        </Item>)
        expect(screen.getByTestId("title").textContent).toBe("boots")
        expect(screen.getByTestId("price").textContent).toContain("3")
        expect(screen.getByTestId("product-img").src).toContain("hello.png")
    })

    it("increments item count", async () => {
        const user = userEvent.setup()
        render(<Item
        id = {1}
        title = {"boots"}
        price = {3}
        image = {"hello.png"}
        addItemsToCart = {addItemsToCart}
        >
        </Item>)
        const incrementButton = screen.getByRole("button", {name: "+"});
        const countInput = screen.getByTestId("count-input")
        await user.click(incrementButton)
        await user.click(incrementButton)
        expect(countInput.textContent).toBe("2")
    })

    it("decrements item count", async () => {
        const user = userEvent.setup()
        render(<Item
        id = {1}
        title = {"boots"}
        price = {3}
        image = {"hello.png"}
        addItemsToCart = {addItemsToCart}
        >
        </Item>)
        const incrementButton = screen.getByRole("button", {name: "+"});
        const decrementButton = screen.getByRole("button", {name: "-"});
        const countInput = screen.getByTestId("count-input")
        await user.click(incrementButton)
        await user.click(incrementButton)
        await user.click(decrementButton)
        expect(countInput.textContent).toBe("1")
    })
     it("does not decrement below 0", async () => {
        const user = userEvent.setup()
        render(<Item
        id = {1}
        title = {"boots"}
        price = {3}
        image = {"hello.png"}
        addItemsToCart = {addItemsToCart}
        >
        </Item>)
        const incrementButton = screen.getByRole("button", {name: "+"});
        const decrementButton = screen.getByRole("button", {name: "-"});
        const countInput = screen.getByTestId("count-input")
        await user.click(incrementButton)
        await user.click(decrementButton)
        await user.click(decrementButton)
        expect(countInput.textContent).toBe("0")
    })
    it("resets count to zero when add to cart is click", async () => {
         const user = userEvent.setup()
        render(<Item
        id = {1}
        title = {"boots"}
        price = {3}
        image = {"hello.png"}
        addItemsToCart = {addItemsToCart}
        >
        </Item>)
        const incrementButton = screen.getByRole("button", {name: "+"});
        const countInput = screen.getByTestId("count-input")
        const addToCartBtn = screen.getByRole("button", {name: "Add to Cart"})
        await user.click(incrementButton)
        await user.click(addToCartBtn)
        expect(countInput.textContent).toBe("0")
        
        expect(countInput.textContent).toBe("0")
    })
    
})
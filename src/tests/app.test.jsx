import React from "react";
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Item from '../components/Item'
import { describe, expect, it, vi } from "vitest";
import Cart from "../components/Cart"
import App from "../App"
import { MemoryRouter } from "react-router-dom";
import Shop from "../components/Shop"

//mock custom api hook
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
    {
        price: 8,
        image: "socks.png",
        title: "sock",
        id: 3,
    },
]

describe("integration test", () => {
    it("opens modal when cart is clicked", () => {
        render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", {name: "Shop empty. Come back later!"}))
    })
    
})
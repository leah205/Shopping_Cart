import React from "react";
import {render, screen, within} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Item from '../components/Item'
import { describe, expect, it, vi } from "vitest";
import Cart from "../components/Cart"
import App from "../App"
import { MemoryRouter, createMemoryRouter, RouterProvider} from "react-router-dom";
import routesConfig from "../main"
import Shop from "../components/Shop"
import { ServerDescriptionChangedEvent } from "mongodb";


//mock custom api hook

let items = [
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

vi.mock("../hooks/StoreHook", () => ({
    default: () => {
        return {items: items, loading: false, error: false}
    }
}))

describe("routes", () => {
    it("shop container displays at shop route", () => {
        const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/shop"],
  });
        render(<RouterProvider router={router} />);
  expect(screen.getByTestId("item-container")).toBeInTheDocument()
    })
    it("home route works", () => {
        const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/home"]
  });
         render(<RouterProvider router={router} />);
  expect(screen.getByTestId("home")).toBeInTheDocument()
    expect(screen.queryByTestId("item-container")).not.toBeInTheDocument()
    })
    it("displays home at  root", () => {
         const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"]
  });
         render(<RouterProvider router={router} />);
  expect(screen.getByTestId("home")).toBeInTheDocument()
    expect(screen.queryByTestId("item-container")).not.toBeInTheDocument()
    })


    it("displays error when cannot find route", () => {
       
         const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/slkjfd"]
        });
         render(<RouterProvider router={router} />);
        expect(screen.queryByTestId("home")).not.toBeInTheDocument()
        expect(screen.queryByTestId("item-container")).not.toBeInTheDocument()
        expect(screen.queryByTestId("error-message")).toBeInTheDocument()
    })

   
})

describe("items", () => {
      it("renders items", () => {
         const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/shop"]
        });
         render(<RouterProvider router={router} />);
        const items = screen.queryAllByTestId('item-card')
        expect(items.length).toBe(3)
      })
})

describe("cart", () => {
    it("updates cart", async () => {
        let user = userEvent.setup()
         const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/shop"]
        });
         render(<RouterProvider router={router} />);
        const item = screen.queryAllByTestId('item-card')[0]
        console.log(item)
        const incrementBtn = within(item).getByText('+')
        const addToCartBtn = within(item).getByText('Add to Cart')
        const openModalBtn = screen.getByTestId("cartbtn")

        await user.click(incrementBtn)
        await user.click(incrementBtn)
        await user.click(addToCartBtn)
        await user.click(openModalBtn)
        const cart = screen.getByTestId("modal")
        const title = within(cart).getByTestId("title")
        expect(screen.getByTestId('item-count').textContent).toBe("2")
        expect(title.textContent).toBe("boots")
    })
    it("deletes item from cart", async () => {
          let user = userEvent.setup()
         const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/shop"]
        });
         render(<RouterProvider router={router} />);
        const item1 = screen.queryAllByTestId('item-card')[0]
        const item2 = screen.queryAllByTestId('item-card')[2]
        
        const incrementBtn1 = within(item1).getByText('+')
        const addToCartBtn1 = within(item1).getByText('Add to Cart')
        const incrementBtn2 = within(item2).getByText('+')
        const addToCartBtn2 = within(item2).getByText('Add to Cart')
        const openModalBtn = screen.getByTestId("cartbtn")

        await user.click(incrementBtn1)
        await user.click(incrementBtn1)
        await user.click(incrementBtn2)
        await user.click(addToCartBtn1)
        await user.click(addToCartBtn2)
        await user.click(openModalBtn)
        const cart = screen.getByTestId("modal")
        const delete1 = within(cart).queryAllByText("delete")[0]
        await user.click(delete1)
        const title = within(cart).getByTestId("title")
        expect(screen.getByTestId('item-count').textContent).toBe("1")
        expect(title.textContent).toBe("sock")
    })
     it("empties cart on checkout", async () => {
        let user = userEvent.setup()
         const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/shop"]
        });
         render(<RouterProvider router={router} />);
        const item = screen.queryAllByTestId('item-card')[0]
        const incrementBtn = within(item).getByText('+')
        const addToCartBtn = within(item).getByText('Add to Cart')
        const openModalBtn = screen.getByTestId("cartbtn")

        await user.click(incrementBtn)
        await user.click(addToCartBtn)
        await user.click(openModalBtn)
        const checkout = screen.getByText('Checkout')
        await user.click(checkout)
         expect(screen.queryByTestId("modal")).toBeFalsy() 
         expect(screen.getByTestId('item-count').textContent).toBe("0")
        
    })

})

describe("modal", () => {
    it("modal opens", async () => {
        let user = userEvent.setup()
         const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/"]
        });
         render(<RouterProvider router={router} />);
        const openModalBtn = screen.getByTestId("cartbtn")
        await user.click(openModalBtn)
        expect(screen.queryByTestId("modal")).toBeTruthy()
    })
    it("modal closes with close button", async () => {
        let user = userEvent.setup()
         const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/"]
        });
         render(<RouterProvider router={router} />);
        const openModalBtn = screen.getByTestId("cartbtn")
        await user.click(openModalBtn)
        const closeModalBtn = screen.getByTestId("close-modal")
        await user.click(closeModalBtn)
        expect(screen.queryByTestId("modal")).toBeFalsy() 
    })
   
  
        


        
    
})
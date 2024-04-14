import { fireEvent, render, screen } from "@testing-library/react"
import Navbar from "../src/Components/Navbar"
import { Provider } from "react-redux"
import appStore from "../src/redux/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

// Mock the logo import
jest.mock("../src/images/logo.png", () => 'mock-logo-path.png');

// Test Case: 1
it("should render the Navbar Component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("link", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
})

// Test Case: 2
it("should render the Navbar Component with Cart (0)", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByText("Cart (0)")
    expect(loginBtn).toBeInTheDocument();
})

// Test Case: 3
it("should render the Navbar Component with Cart [regex]", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByText(/Cart/)
    expect(loginBtn).toBeInTheDocument();
})

// Test Case: 5
it("should render the Navbar Component with Login and on click, change to Logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("link", { name: "Login" })
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole("link", { name: "Logout" })

    expect(logoutBtn).toBeInTheDocument();
})
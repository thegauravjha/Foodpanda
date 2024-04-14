import { render, screen } from "@testing-library/react"
import MOCK_DATA from "./mocks/restaurantCardMock.json"
import RestaurantCard, { labledRestaurantCard } from "../src/Components/Restaurant/RestaurantCard"
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"


const RestaurantCardVegOnly = labledRestaurantCard(RestaurantCard);

// Test Case 1:
it("should render the reastaurant Card component with prop data", () => {
    render(
        <BrowserRouter>
            <RestaurantCard data={MOCK_DATA} />
        </BrowserRouter>
    )
    const name = screen.getByText("NIC Ice Creams");
    // Assertion
    expect(name).toBeInTheDocument()
})


// Test Case 2:
it("should render the reastaurant Card Labeled component with prop data", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <RestaurantCardVegOnly data={MOCK_DATA} label={MOCK_DATA.info.veg} />
        </BrowserRouter>
    );
    const button = getByTestId("veg_label");
    expect(button).toBeInTheDocument();
});

// Test Case 3:
it('another way of writing test case 2', () => {
    const { container } = render(
        <BrowserRouter>
            <RestaurantCardVegOnly data={MOCK_DATA} label={MOCK_DATA.info.veg} />
        </BrowserRouter>
    );
    const vegLabelDiv = container.querySelector('.veg_label');
    expect(vegLabelDiv).toBeInTheDocument();
})
import {render, screen} from "@testing-library/react"
import Body from "../src/Components/Body"

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

// Test Case 1
it("should filter the pizza cards", ()=>{
    render(<Body />)
})
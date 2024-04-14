import { render, screen } from "@testing-library/react"
import Contact from "../src/Components/Contact"
import '@testing-library/jest-dom'

describe("Component Should load", () => {
    // Test Case 1:
    test("Contact component should rendered - Heading", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading")

        // Assertion
        expect(heading).toBeInTheDocument();
    })

    describe("both test cases for button", () => {
        // Test Case 2:
        test("Contact component should rendered - Button", () => {
            render(<Contact />);
            const heading = screen.getByRole("button")

            // Assertion
            expect(heading).toBeInTheDocument();
        })

        // Test Case 3:
        test("Contact component should rendered - with the text 'Submit' anywhere", () => {
            render(<Contact />);
            const heading = screen.getByText("Submit")

            // Assertion
            expect(heading).toBeInTheDocument();
        })
    })

    // Test Case 4:
    test("Contact component should rendered - with the placeholder text 'How can I help you?'", () => {
        render(<Contact />);
        const heading = screen.getByPlaceholderText("How can I help you?")

        // Assertion
        expect(heading).toBeInTheDocument();
    })

    describe("textbox includes both input and textarea", () => {
        // Test Case 5:
        test("Contact component should rendered - all the input boxes", () => {
            render(<Contact />);
            const heading = screen.getAllByRole('textbox')

            // Assertion
            expect(heading.length).toBe(3);
        })

        // Test Case 6:
        test("Contact component should rendered - all the input boxes [using not]", () => {
            render(<Contact />);
            const heading = screen.getAllByRole('textbox')

            // Assertion
            expect(heading.length).not.toBe(4);
        })
    })
})

import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./Navbar";
import Body from "./Body"
// import About from "./src/Components/About";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Restaurant/RestaurantMenu";
import { Suspense } from "react"
import Shrimmer from "../utils/Shrimmer";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import Cart from "./Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
const About = lazy(() => import("./About"));

const App = () => {
    return (
        <Provider store={appStore}>
            <>
                <Navbar />
                <Outlet />
            </>
        </Provider>
    )
}

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shrimmer />}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "cart",
                element: <Cart />
            },
        ]
    },
]);

root.render(<RouterProvider router={appRoute} />)
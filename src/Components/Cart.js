import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './Cart/CartItem';
import { clearItems } from '../redux/Slices/cartSlice';

const Cart = () => {
    const cartItem = useSelector((state) => (state.cart.items))
    const dispatch = useDispatch();

    const handleClearCartClick = () => {
        dispatch(clearItems());
    }

    if (cartItem.length == 0) return (
        <div className="cart_container">
            <h2 style={{ color: "rgba(2, 6, 12, 0.75)" }}>Your cart is empty</h2>
        </div>
    )

    console.log("items in the cart: ", cartItem);
    return (
        <div className="cart_container">
            {/* Top Heading */}
            <div className='cart_heading'>
                <h2 style={{ color: "rgba(2, 6, 12, 0.75)" }}>Checkout</h2>
                <div className='clear_cart_btn' onClick={handleClearCartClick}>Clear Cart</div>
            </div>

            {/* Item Heading */}
            <div className='cart_item_heading'>
                <div>Items</div>
                <div>Price</div>
            </div>

            {/* List Items */}
            <div className='cart_items'>
                {
                    cartItem?.map((item) => (
                        <CartItem key={item.id} currItem={item} />
                    ))
                }
            </div>

            {/* Summary */}
            <div className='cart_item_summary'>
                <div>Total</div>
                <div className='total_price'>
                    ₹ {
                        cartItem
                            ?.map((item) => (item.price || item.defaultPrice))
                            ?.reduce((price, prevPrice) => (price + prevPrice), 0) / 100
                    }
                </div>
            </div>

            {/* Pay Button */}
            <div className='pay_button'>
                Proceed To Pay
            </div>
        </div>
    )
}

export default Cart
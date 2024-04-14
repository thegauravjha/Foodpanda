import React from 'react'

const CartItem = ({ currItem }) => {
    const { name, price, defaultPrice } = currItem
    return (
        <div className='cart_items'>
            <div className='cart_item_name'>
                {name}
            </div>
            <div className='cart_item_price'>
                ₹ {price / 100 || defaultPrice / 100}
            </div>
        </div>
    )
}

export default CartItem
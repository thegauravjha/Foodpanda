import React from 'react';
import { CDN_URL, cropText } from "../../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/Slices/cartSlice';

const RestaurantItem = ({ currItem }) => {
    const dispatch = useDispatch();

    const handleAddClick = (item) => {
        dispatch(addItem(item));
    }
    const { name, description, imageId, price, defaultPrice } = currItem?.card?.info;
    return (
        <div className='item_container'>
            <div className='item_info'>
                <div className='item_name'>
                    {name}
                    <div className='item_price'>₹ {price / 100 || defaultPrice / 100}</div>
                </div>
                <p className='item_description'>
                    {description}
                </p>
            </div>
            <div className='item_image'>
                {imageId && <img src={CDN_URL + imageId} alt="food_image" className="food_image" />}
                <div
                    className='item_add_btn'
                    style={imageId ? { top: "80px", left: "14px" } : { left: "14px" }}
                    onClick={() => handleAddClick(currItem?.card?.info)}
                >
                    Add
                </div>
            </div>
        </div>
    )
}

export default RestaurantItem
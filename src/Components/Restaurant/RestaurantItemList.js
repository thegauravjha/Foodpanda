import React from 'react'
import RestaurantItem from './RestaurantItem';

const RestaurantItemList = ({ itemCards }) => {
    // console.log("itemCards", itemCards);
    return (
        <div className='itemList_container'>
            {
                itemCards.map((currItem) => (
                    <RestaurantItem key={currItem?.card?.info?.id} currItem={currItem} />
                ))
            }
        </div>
    )
}

export default RestaurantItemList
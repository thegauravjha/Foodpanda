import React, { useEffect, useState } from 'react'
import RestaurantItemList from "./RestaurantItemList"

const RestaurantCategory = ({ currCategory, showAccordion, setShowAccordionIndex, showAccordionIndex, index }) => {

    const accordionHandleClick = () => {
        (showAccordionIndex == index) ? setShowAccordionIndex(-1) : setShowAccordionIndex(index);
    };

    // console.log("currCategory", currCategory);
    const { title, itemCards } = currCategory?.card?.card;
    return (
        <div className='category_card'>
            <div className='accordion_header' onClick={accordionHandleClick}>
                <h4>{title} ({itemCards.length})</h4>
                {
                    showAccordion
                        ? <i className="fa-solid fa-chevron-up"></i>
                        : <i className="fa-solid fa-chevron-down"></i>
                }
            </div>
            {
                showAccordion && <div className='accordion_content'>
                    <RestaurantItemList itemCards={itemCards} />
                </div>
            }
        </div>
    )
}

export default RestaurantCategory
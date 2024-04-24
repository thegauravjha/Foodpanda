import React, { useEffect, useState } from 'react'
import Shrimmer from '../../utils/Shrimmer';
import { useParams } from 'react-router-dom';
import { FETCH_MENU_URL } from "../../utils/constants"
import useFetch from '../../utils/useFetch';
import RestaurantCategory from './RestaurantCategory';

const RestaurentMenu = () => {
    const { resId } = useParams();
    const { data: restaurantData, setData: setRestaurantData, loading, setLoading } = useFetch(FETCH_MENU_URL + resId);
    const [cards, setCards] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [categoryCards, setCategoryCards] = useState(null);
    const [showAccordionIndex, setShowAccordionIndex] = useState(0);

    useEffect(() => {
        setCards(restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
        setRestaurantInfo(restaurantData?.data?.cards[2]?.card?.card?.info);
    }, [restaurantData])

    useEffect(() => {
        if (cards) {
            const categoryCards = cards.filter(card => {
                return card.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            })
            setCategoryCards(categoryCards);
        }
    }, [cards])

    if (!categoryCards) return <Shrimmer />;
    return (
        <div className='menu_container'>
            <div className='res_container'>
                <div className='menu_res_header_left'>
                    {/* Restaurant Name and Address */}
                    <h3 className='menu_res_name'>{restaurantInfo.name}</h3>
                    <div className='menu_res_sub_info'>
                        <p>{restaurantInfo.cuisines.join(", ")}</p>
                        <p className='menu_res_address'>
                            {restaurantInfo.areaName}, {restaurantInfo.sla.lastMileTravelString}
                        </p>
                    </div>
                </div>
                <div className='menu_res_header_right'>
                    {/* Restaurant Rating */}
                    <div className='menu_res_rating'>&#9733; {restaurantInfo.avgRatingString}</div>
                    <div className='menu_res_total_rating'>{restaurantInfo.totalRatingsString}</div>
                </div>
            </div>

            {/* Categories */}
            <div className='category_container'>
                {
                    categoryCards.map((currCategory, index) => (
                        <RestaurantCategory
                            key={currCategory.card.card.title}
                            currCategory={currCategory}
                            showAccordion={index == showAccordionIndex ? true : false}
                            setShowAccordionIndex={setShowAccordionIndex}
                            showAccordionIndex={showAccordionIndex}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RestaurentMenu;

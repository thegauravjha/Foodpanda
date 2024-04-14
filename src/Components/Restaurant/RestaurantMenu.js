import React, { useEffect, useState } from 'react'
import Shrimmer from '../../utils/Shrimmer';
import { useParams } from 'react-router-dom';
import { FETCH_MENU_URL } from "../../utils/constants"
import useFetch from '../../utils/useFetch';
import RestaurantCategory from './RestaurantCategory';

const RestaurentMenu = () => {
    const { resId } = useParams();
    const { data: restaurantData, setData: setRestaurantData, loading, setLoading } = useFetch(FETCH_MENU_URL + resId, true);
    const [cards, setCards] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [categoryCards, setCategoryCards] = useState(null);
    const [showAccordionIndex, setShowAccordionIndex] = useState(0);
    const [showTimeoutText, setShowTimeoutText] = useState(false);
    const [showTryAgainText, setShowTryAgainText] = useState(false);

    // To check how long Shimmer is taking
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTimeoutText(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timeout);
    }, [loading]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTryAgainText(true);
        }, 180000); // 3 minute

        return () => clearTimeout(timeout);
    }, [loading]);

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

    // Showing Shimmer
    if (showTryAgainText) return (
        <p className='main_container'>
            Something is wrong with the API. Please TRY AGAIN later.
        </p>
    );

    if (showTimeoutText) return (
        <>
            <p className='main_container'>
                It's taking longer than it looks like. It is happening because of CORS API
            </p>
            <Shrimmer />
        </>);
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

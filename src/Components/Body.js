import { useEffect, useState } from "react"
import RestaurantCard, { labledRestaurantCard } from './Restaurant/RestaurantCard';
import { FETCH_MAIN_URL } from "../utils/constants"
import Shrimmer from "../utils/Shrimmer";
import useFetch from "../utils/useFetch"
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [filteredData, setFilteredData] = useState(null);
    const [searchText, setSearchText] = useState("");
    const { data, setData, loading, setLoading } = useFetch(FETCH_MAIN_URL, true);
    const onlineStatus = useOnlineStatus();
    const RestaurantCardVegOnly = labledRestaurantCard(RestaurantCard);

    useEffect(() => {
        if (data) {
            setFilteredData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    }, [data]);


    if (!onlineStatus) return (
        <div className="main_container">
            <h2 style={{
                color: "rgba(2, 6, 12, 0.75)"
            }}>Look's like you are offline, Please check your internet connection.</h2>
        </div>
    )

    if (!data) return <Shrimmer />;
    const { restaurants } = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;


    const handleFilterClick = (e) => {
        // btn selection logic
        const filters = document.querySelectorAll('[data-filter]');
        filters.forEach(currFilter => {
            currFilter.classList.remove("active");
        })
        e.target.classList.add('active');

        // Filter logic
        if (e.target.dataset.filter === "all") {
            setFilteredData(restaurants);
        } else if (e.target.dataset.filter === "top_rated") {
            const filterData = restaurants.filter((currData) => currData.info.avgRating >= 4.4)
            setFilteredData(filterData);
        } else if (e.target.dataset.filter === "low_to_high") {
            setFilteredData(restaurants);
        } else if (e.target.dataset.filter === "high_to_low") {
            setFilteredData(restaurants);
        }
    };

    const handleSearchInput = (e) => {
        const input = document.getElementById("search_input");
        setSearchText(e.target.value);
        input.addEventListener('keypress', (event) => {
            if (event.key === "Enter") {
                handleSearchClick();
            }
        })
    };

    const handleSearchClick = () => {
        const filters = document.querySelectorAll('[data-filter]');
        filters.forEach(currFilter => {
            currFilter.classList.remove("active");
        })

        const searchedData = restaurants.filter((data) => (
            data?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        ))
        setFilteredData(searchedData);
    };

    return (
        <div className="main_container">
            <h2 style={{
                color: "rgba(2, 6, 12, 0.75)"
            }}>Top restaurant chains in Delhi</h2>
            {
                loading || !filteredData
                    ? <h1> Loading... </h1>
                    :
                    <>
                        <div className='filter_container'> Filters:
                            <button data-filter="all" className="filter_btn active" onClick={handleFilterClick}>All</button>
                            <button data-filter="top_rated" className="filter_btn" onClick={handleFilterClick}>Top Rated</button>
                            <button data-filter="low_to_high" className="filter_btn" onClick={handleFilterClick}>Cost: Low to High</button>
                            <button data-filter="high_to_low" className="filter_btn" onClick={handleFilterClick}>Cost: High to Low</button>
                            <div className='search'>
                                <input className='search_input'
                                    id="search_input"
                                    type="text"
                                    value={searchText}
                                    onChange={handleSearchInput}
                                    placeholder='Search for restaurant name'
                                />
                                <div className='search_btn' onClick={handleSearchClick}>Search</div>
                            </div>
                        </div>

                        {
                            filteredData?.length === 0
                                ? <div className="main_container">
                                    <h3>No Restaurant Found!</h3>
                                </div>
                                : <div className="res_container">
                                    {
                                        filteredData.map((currData) => (
                                            currData.info.veg
                                                ? <RestaurantCardVegOnly key={currData.info.id} data={currData} label={currData.info.veg} />
                                                : <RestaurantCard key={currData.info.id} data={currData} />
                                        ))
                                    }
                                </div>
                        }
                    </>
            }
        </div>
    )
}

export default Body;
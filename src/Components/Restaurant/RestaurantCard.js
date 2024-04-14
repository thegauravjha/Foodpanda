import { CDN_URL, cropText } from "../../utils/constants";
import { Link } from "react-router-dom"

cropText("this is a string", 10);
cropText(["this", "is a", "string"], 10);

const RestaurantCard = ({ data, label }) => {
    if (!data) { return (<p>Data Not Found!!</p>) }
    const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName, costForTwo } = data.info;
    return (
        data &&
        <div className="res_card">
            <Link
                to={"/restaurant/" + data.info.id}
                key={data.info.id}
            >
                {
                    label
                        ? <div className="veg_label" data-testid="veg_label">
                            <i className="fa-regular fa-circle-stop"></i>
                        </div>
                        : ""
                }
                <img src={CDN_URL + cloudinaryImageId} alt="food_image" className="food_image" />

                <div className="food_info">
                    <div className="food_name">{cropText(name, 20)}</div>
                    <div className="rating_and_eta">
                        <div>&#9733; {avgRating} Stars</div>
                        <div>{sla.slaString}</div>
                    </div>
                    <div className="cuisine">{cropText(cuisines, 30)}</div>
                    <div className="location">{areaName}</div>
                    <div className="cost">{costForTwo}</div>
                </div>
            </Link>
        </div>
    )
}

export const labledRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default RestaurantCard;
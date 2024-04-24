export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_MAIN_URL = 'https://thingproxy-760k.onrender.com/fetch/'+'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4956341&lng=77.4010397&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

export const FETCH_MENU_URL = 'https://thingproxy-760k.onrender.com/fetch/'+'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=';

export const cropText = (text, textLength) => {
    if (typeof (text) === "string") {
        if (text.length <= textLength) {
            return text;
        }
        text = text.substring(0, textLength) + "...";
        return text;
    }
    if (typeof (text) === "object") {
        text = text.join(", ");
        if (text.length <= textLength) {
            return text;
        }
        text = text.substring(0, textLength);
        text = (text.slice(-1) == "," || text.slice(-1) == " ") ? text : text + "...";
        return text;
    }
};
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {

    static async listRestaurant() {
        const response = await fetch(API_ENDPOINT.LIST);
        return response.json();
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    // static async pictureRestaurant(pictureId) {
    //     const response = await fetch(API_ENDPOINT.PICTURE(pictureId));
    //     return response.json();
    // }
}

export default RestaurantSource;
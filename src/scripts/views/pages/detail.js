// C: \Nando\Code\wca\src\scripts\data\restaurant - data.js
import RestaurantSource from '../../data/restaurant-data';

const Detail = {
    async render() {
        return `
          <h2>Detail Page</h2>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        console.log("OK");

        const restaurant = await RestaurantSource.listRestaurant();
        console.log(restaurant);
    },
};

export default Detail;
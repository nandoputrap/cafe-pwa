import RestaurantSource from '../../data/restaurant-data';
import API_ENDPOINT from '../../globals/api-endpoint';


const Cafes = {
    async render() {
        return `
          <div class="hero">
            <div class="hero-img">
                <img src="./images/heros/hero-image_3.jpg" alt="hero">
            </div>
            <div class="hero-caption">
                <h1>Welcome to Whatever Cafe Apps!</h1>
                <p>Let's explore whatever cafe you want!</p>
                <button><a href="#cafes">View Cafes</a></button>
            </div>
        </div>

        <div class="cafes" id="cafes">
            <div class="section-title">
                <h1>Explore Cafe</h1>
            </div>

            <div class="section-cafes">
            </div>
        </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        console.log("Cafes Page");
        const restaurants = await RestaurantSource.listRestaurant();
        // const pictureRestaurant = await RestaurantSource.pictureRestaurant();
        console.log(restaurants);

        let cafeElement = '';
        restaurants.restaurants.forEach(cafe => {
            // const picture = RestaurantSource.pictureRestaurant(cafe.pictureId);
            cafeElement += `
    <div class="cafe" tabindex="0">
        <img src="${API_ENDPOINT.PICTURE(cafe.pictureId)}" alt="${cafe.name}">
        <div class="cafe-description">
            <h2>${cafe.name}</h2>
            <p>Kota: ${cafe.city} | Rating: ${cafe.rating}</p>
            <br>
            <p class="description">${cafe.description}</p>
            <br>
            <a href="#/detail/${cafe.id}" class="btn-detail-cafe">Detail</a>
        </div>
    </div>
    `
        });

        document.querySelector(".section-cafes").innerHTML = cafeElement;
    },
};

export default Cafes;
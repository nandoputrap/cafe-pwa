// C: \Nando\Code\wca\src\scripts\data\restaurant - data.js
import RestaurantSource from '../../data/restaurant-data';
import API_ENDPOINT from '../../globals/api-endpoint';
import UrlParser from '../../routes/url-parser';

const Detail = {
    async render() {
        return `
          <div class="cafes" id="cafes">
            <div class="section-title">
                <h1>Cafe Detail</h1>
            </div>

            <div class="section-cafes">
                
            </div>

            <div class="reviews">

            </div>
        </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        console.log("OK");

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const cafe = await RestaurantSource.detailRestaurant(url.id);
        console.log(cafe);

        const cafeDetail = `<div class="cafe" tabindex="0">
                <img src="${API_ENDPOINT.PICTURE(cafe.restaurant.pictureId)}" alt="${cafe.restaurant.name}">
                <div class="cafe-description">
                    <h2>${cafe.restaurant.name}</h2>
                    <p>Kota: ${cafe.restaurant.city} | Alamat: ${cafe.restaurant.address}</p>
                    <p>Rating: ${cafe.restaurant.rating}</p>
                </div >     
        </div > `

        let cafeReviews = '';

        // console.log(cafe.restaurant.customerReviews);
        const reviews = cafe.restaurant.customerReviews;


        reviews.forEach(review => {
            cafeReviews += `
                <p>${review.name}</p>
                <p>${review.review}</p>
                <p>${review.date}</p>
                <br>
            `
        });

        document.querySelector(".section-cafes").innerHTML = cafeDetail;

        document.querySelector(".reviews").innerHTML = cafeReviews;

    },
};

export default Detail;
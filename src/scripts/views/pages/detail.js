// C: \Nando\Code\wca\src\scripts\data\restaurant - data.js
import RestaurantSource from '../../data/restaurant-data';
import API_ENDPOINT from '../../globals/api-endpoint';
import UrlParser from '../../routes/url-parser';

const Detail = {
    async render() {
        // <button><a href="">Add to favorite</a></button>
        return `
        <div class="cafe-detail">
            <div class="section-cafe-detail">
                
            </div>

            <div class="menu">
                <div class="menu-list">
                    <div class="categories">
                        <h1>📋</h1>
                        <h2>Categories</h2>
                        <br><br>
                        <div class = "category-list">
                        </div>
                    </div>
                    <div class="foods">
                        <h1>🍽️</h1>
                        <h2>Foods</h2>
                        <br><br>
                        <div class = "food-list">
                        </div>
                    </div>
                    <div class="drinks">
                        <h1>🥤</h1>
                        <h2>Drinks</h2>
                        <br><br>
                        <div class = "drink-list">
                        </div>
                    </div>
                </div>
            </div>

            <div class="reviews">
                <h2>Reviews</h2>
                <div class = "review-list">
                </div>
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

        const cafeDetail = `
                <div class="haha" tabindex="0">
                    <img src="${API_ENDPOINT.PICTURE(cafe.restaurant.pictureId)}" alt="${cafe.restaurant.name}">
                    <div class="hehe">
                        <h1>${cafe.restaurant.name}</h1>
                        <p>Kota: ${cafe.restaurant.city} | Alamat: ${cafe.restaurant.address}</p>
                        <p>Rating: ${cafe.restaurant.rating}</p>
                    </div>
                </div >`

        let cafeReviews = '';
        let cafeFoods = '';
        let cafeDrinks = '';
        let cafeCategories = '';

        // console.log(cafe.restaurant.customerReviews);
        const reviews = cafe.restaurant.customerReviews;
        const foods = cafe.restaurant.menus.foods;
        const drinks = cafe.restaurant.menus.drinks;
        const categories = cafe.restaurant.categories;

        categories.forEach(category => {
            cafeCategories += `
                <p>${category.name}</p>
                <br>
            `
        });

        foods.forEach(food => {
            cafeFoods += `
                <p>${food.name}</p>
                <br>
            `
        });

        drinks.forEach(drink => {
            cafeDrinks += `
                <p>${drink.name}</p>
                <br>
            `
        });

        reviews.forEach(review => {
            cafeReviews += `
                <p class="reviewer-name">${review.name}</p>
                <p>${review.review}</p>
                <p class="reviewer-date">${review.date}</p>
                <br>
            `
        });

        // document.querySelector(".cafe-name").innerHTML = cafe.restaurant.name;

        document.querySelector(".section-cafe-detail").innerHTML = cafeDetail;

        document.querySelector(".category-list").innerHTML = cafeCategories;

        document.querySelector(".review-list").innerHTML = cafeReviews;

        document.querySelector(".food-list").innerHTML = cafeFoods;

        document.querySelector(".drink-list").innerHTML = cafeDrinks;

    },
};

export default Detail;
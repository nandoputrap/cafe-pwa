import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#hamburger-list'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

// cafe list
// import data from '../DATA.json';

// let cafeElement = '';
// data.restaurants.forEach(cafe => {
//     cafeElement += `
//     <div class="cafe" tabindex="0">
//         <img src="${cafe.pictureId}" alt="${cafe.name}">
//         <div class="cafe-description">
//             <h2>${cafe.name}</h2>
//             <p>Kota: ${cafe.city} | Rating: ${cafe.rating}</p>
//             <br>
//             <p class="description">${cafe.description}</p>
//             <br>
//             <a href="#/detail/${cafe.id}" class="btn-detail-cafe">Detail</a>
//         </div>
//     </div>
//     `
// });

// document.querySelector(".section-cafes").innerHTML = cafeElement;

// console.log('Hello Coders! :)');
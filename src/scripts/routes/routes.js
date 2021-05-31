// import Home from '../views/pages/home';
// import AboutUs from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Cafes from '../views/pages/cafes';

const routes = {
    // '/': NowPlaying, // default page
    // '/now-playing': NowPlaying,
    // '/upcoming': Upcoming,
    '/': Cafes,
    '/favorite': Favorite,
    '/detail/:id': Detail,
};

export default routes;
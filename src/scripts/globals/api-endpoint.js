import CONFIG from './config';

const API_ENDPOINT = {
    // NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
    // UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
    LIST: `${CONFIG.BASE_URL}list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
    PICTURE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}${pictureId}`,
};

export default API_ENDPOINT;
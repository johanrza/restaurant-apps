import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  PICTURE_SMALL: (id) => `${CONFIG.BASE_IMAGE_URL_SMALL}/${id}`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;

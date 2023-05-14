import UrlParser from '../../routes/url-parser';
import RestaurantResource from '../../data/restaurant-source';
import { createDetailRestaurant, createDetailRestaurantComments } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <section id="restaurant-detail" class="restaurant-detail"></section>
    <section id="comments" class="comment-box"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantResource.detailRestaurant(url.id);

    const restorantsContainer = document.querySelector('#restaurant-detail');
    const comments = document.querySelector('#comments');
    restorantsContainer.innerHTML = await createDetailRestaurant(restaurant);
    comments.innerHTML += await createDetailRestaurantComments(restaurant);
  },
};

export default Home;

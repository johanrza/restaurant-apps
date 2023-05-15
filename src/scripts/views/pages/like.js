import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItem } from '../template/template-creator';

const Like = {
  async render() {
    return `
    <section class="favorite-restaurant">
      <h2 class="restaurant-header">Favorite Restaurant</h2>
      <div class="restaurants"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Like;

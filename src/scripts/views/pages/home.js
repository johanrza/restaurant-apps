import RestaurantResource from '../../data/restaurant-source';
import { createRestaurantItem } from '../template/template-creator';

const Home = {
  async render() {
    return `
      <section class="explore-restaurant">
        <h2 class="restaurant-header">Explore Restaurant</h2>
        <div class="restaurants"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantResource.listRestaurant();

    const restorantsContainer = document.querySelector('.restaurants');
    restaurants.forEach((restaurant) => {
      restorantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Home;

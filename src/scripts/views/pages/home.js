import data from '../../../DATA.json';
import createRestaurantItem from '../template/template-creator';

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
    const restorantsContainer = document.querySelector('.restaurants');
    data.restaurants.forEach((restaurant) => {
      restorantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Home;

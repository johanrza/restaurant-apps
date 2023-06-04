/* eslint-disable class-methods-use-this */
import { createRestaurantItem } from '../../template/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <section class="explore-restaurant">
      <div class="content">
      <input id="query" type="text">
      <h2 class="restaurant-header">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    </section>
  `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItem(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;

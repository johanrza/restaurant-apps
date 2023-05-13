import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) => `
    <article class="restaurant-item">
      <p class="restaurant-item__city">${restaurant.city} City</p>
      <img class="restaurant-item__image" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="Picture of ${restaurant.name} restaurant in ${restaurant.city} city" />
      <div class="restaurant-item__content">
        <p class="restaurant-item__rating">Rating: ${restaurant.rating}</p>
        <h2 class="restaurant-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
        <p class="restaurant-item__description">${restaurant.description}</p>
      </div>
    </article>`;

export default createRestaurantItem;

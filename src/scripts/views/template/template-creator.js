import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) => `
    <article class="restaurant-item">
      <p class="restaurant-item__city">${restaurant.city} City</p>
      <img class="restaurant-item__image" src="${
  CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
}" alt="${restaurant.name} restaurant in ${
  restaurant.city
} city" crossorigin="anonymous"/>
      <div class="restaurant-item__content">
        <p class="restaurant-item__rating">Rating: ${restaurant.rating}</p>
        <h2 class="restaurant-item__title"><a href="/#/detail/${
  restaurant.id
}">${restaurant.name}</a></h2>
        <p class="restaurant-item__description">${restaurant.description}</p>
      </div>
    </article>`;

const createDetailRestaurant = (restaurant) => `
  <h2 class="restaurant-detail__title">${restaurant.name}</h2>
  <img class="restaurant-detail__image" src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" crossorigin="anonymous" alt="${restaurant.name} restaurant">
  <div class="restaurant-detail__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>

  <div class="restaurant-detail__categories">
    <h3>Categories</h3>
    <ul class="list-categories">
    ${restaurant.categories.map((category) => `<li class="list-categories__item">${category.name}</li>`).join('')}
    </ul>
  </div>

  <div class="restaurant-detail__menus">
    <h3>Menus</h3>
    <h4>Foods</h4>
    <ul class="list-menus">
    ${restaurant.menus.foods.map((food) => `<li class="list-menus__item">${food.name}</li>`).join('')}
      
    </ul>
    <h4>Drinks</h4>
    <ul class="list-menus">
    ${restaurant.menus.drinks.map((drink) => `<li class="list-menus__item">${drink.name}</li>`).join('')}
    </ul>
  </div>

  <div class="restaurant-detail__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createDetailRestaurantComments = (restaurant) => `
  <h3>Customer Reviews</h3>
  <form id="comment-form">
  <input type="text" id="input-id" value="${restaurant.id}" required />
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="input-name" required />
    </div>
    <div class="form-group">
      <label for="input-comment">Comment:</label>
      <textarea id="input-comment" required></textarea>
    </div>
    <div class="form-group">
      <input type="submit" value="Submit" />
    </div>
  </form>
  <div id="comments-list">
  ${restaurant.customerReviews.map((review) => `
    <div class="comment">
      <p><strong>${review.name}</strong></p>
      <p>${review.review}</p>
      <p><em>${review.date}</em></p>
    </div>
    `).join('')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createDetailRestaurant,
  createRestaurantItem,
  createDetailRestaurantComments,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

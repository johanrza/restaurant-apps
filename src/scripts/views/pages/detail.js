import UrlParser from '../../routes/url-parser';
import RestaurantResource from '../../data/restaurant-source';
import {
  createDetailRestaurant,
  createDetailRestaurantComments,
} from '../template/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <section id="restaurant-detail" class="restaurant-detail"></section>
    <section id="comments" class="comment-box"></section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantResource.detailRestaurant(url.id);

    const restorantsContainer = document.querySelector('#restaurant-detail');
    const comments = document.querySelector('#comments');
    restorantsContainer.innerHTML = await createDetailRestaurant(restaurant);
    comments.innerHTML += await createDetailRestaurantComments(restaurant);

    const buttonComment = document.querySelector('#comment-form');
    buttonComment.addEventListener('submit', async () => {
      await RestaurantResource.postReview({
        id: document.querySelector('#input-id').value,
        name: document.querySelector('#input-name').value,
        review: document.querySelector('#input-comment').value,
      });
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;

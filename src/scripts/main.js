import data from "../DATA.json";
const main = () => {
  const getData = () => {
    const listItem = document.querySelector(".restaurants");
    listItem.innerHTML = "";

    data.restaurants.forEach(({ name, description, pictureId, city, rating }) => {
      listItem.innerHTML += `<article class="restaurant-item">
      <p class="restaurant-item__city">${city} City</p>
          <img class="restaurant-item__image" src="${pictureId}" alt="Picture of ${name} restaurant in ${city} city" />
          <div class="restaurant-item__content">
            <p class="restaurant-item__rating">Rating: ${rating}</p>
            <h1 class="restaurant-item__title"><a href="#">${name}</a></h1>
            <p class="restaurant-item__description">${description}</p>
          </div>
          </article>`;
    });
  };
  document.addEventListener("DOMContentLoaded", () => {
    getData();
  });
};

export default main;

const DrawerInitiator = {
  init({ button, drawer, body }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    body.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show_nav');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show_nav');
  },
};

export default DrawerInitiator;

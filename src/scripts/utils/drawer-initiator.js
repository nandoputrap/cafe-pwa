const DrawerInitiator = {
    init({ button, drawer }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('toggle');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('toggle');
    },
};


export default DrawerInitiator;
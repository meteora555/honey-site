import slider from "./modules/slider";
import modal from "./modules/modals";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    slider('.slider__item', '.slider__dot');
    modal('.callback__btn', '.modal__callback', '.modal__callback-close');
    modal('.slider__item-btn', '.modal__callback', '.modal__callback-close');
});
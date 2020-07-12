import types from './cart.types';

const { TOGGLE_CART_HIDDEN } = types;

export const toggleCart = () => ({
    type: TOGGLE_CART_HIDDEN
});
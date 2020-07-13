import types from './cart.types';

const { TOGGLE_CART_HIDDEN, ADD_CART } = types;

export const toggleCart = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: ADD_CART,
    payload: item
});
import types from './cart.types';

const { TOGGLE_CART_HIDDEN, ADD_CART, REMOVE_FROM_CART, REMOVE_ITEM } = types;

export const toggleCart = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: ADD_CART,
    payload: item
});

export const removeFromCart = item => ({
    type: REMOVE_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
});
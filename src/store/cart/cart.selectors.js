import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCountCartItems = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    }, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0)
);
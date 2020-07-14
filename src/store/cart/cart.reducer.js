import types from './cart.types';
import { addItemToCart } from './cart.util';

const { TOGGLE_CART_HIDDEN, ADD_CART, REMOVE_FROM_CART, REMOVE_ITEM } = types;


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN: return { ...state, hidden: !state.hidden };
        case ADD_CART:
            const newCartItem = addItemToCart(state.cartItems, action.payload);

            return { ...state, cartItems: newCartItem };

        case REMOVE_FROM_CART: return {
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
        };

        case REMOVE_ITEM:
            const id = action.payload.id;
            return {
                ...state,
                cartItems: state.cartItems.reduce((acc, item) => {
                    if (item.id !== id) return [...acc, item];
                    if (item.quantity > 1) {
                        return [...acc, { ...item, quantity: item.quantity - 1 }];
                    }
                    return [...acc];
                }, [])
            };
        default: return state;
    }
}
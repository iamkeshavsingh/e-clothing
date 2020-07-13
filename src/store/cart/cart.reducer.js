import types from './cart.types';
import { addItemToCart } from './cart.util';

const { TOGGLE_CART_HIDDEN, ADD_CART } = types;


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

        default: return state;
    }
}
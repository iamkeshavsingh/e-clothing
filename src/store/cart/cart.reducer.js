import types from './cart.types';

const { TOGGLE_CART_HIDDEN } = types;


const INITIAL_STATE = {
    hidden: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN: return { ...state, hidden: !state.hidden };
        default: return state;
    }
}
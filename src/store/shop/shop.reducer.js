import types from './shop.types';

const { ADD_INIT_DATA } = types;

const INITIAL_STATE = {
    collections: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_INIT_DATA: return { ...state, collections: action.payload };
        default: return state;
    }
};
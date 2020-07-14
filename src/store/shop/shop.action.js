import types from './shop.types';

const { ADD_INIT_DATA } = types;

export const addInitData = initData => ({
    type: ADD_INIT_DATA,
    payload: initData
});
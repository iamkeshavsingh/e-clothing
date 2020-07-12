import { combineReducers } from 'redux';
import UserReducer from './user/userReducer';


export default combineReducers({
    user: UserReducer
});
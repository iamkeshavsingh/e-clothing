import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const middlewares = [logger];

const enhancers = compose(applyMiddleware(...middlewares), composeWithDevTools());

export default createStore(rootReducer, enhancers);
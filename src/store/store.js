import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middlewares = [logger];

const enhancers = compose(applyMiddleware(...middlewares), composeWithDevTools());

export const store = createStore(rootReducer, enhancers);

export const persistor = persistStore(store);

export default { store, persistor };
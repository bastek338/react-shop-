import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import persistStore from 'redux-persist/es/persistStore';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export let persistor = persistStore(store);


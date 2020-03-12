import { createStore, combineReducers } from 'redux';
import user from '../reducers/user/user';
import cart from '../reducers/cart/cart';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({
    user,
    cart
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
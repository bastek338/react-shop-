import { combineReducers } from "redux";
import cart from './cart/cart';
import user from './user/user';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart, 
    user
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
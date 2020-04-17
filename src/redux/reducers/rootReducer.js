import { combineReducers } from "redux";
import cartReducer from './cart/cart';
import userReducer from './user/user';
import directoryReducer from './directory/directory';
import collectionReducer from './collection/collection';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer, 
    user: userReducer,
    directory: directoryReducer, 
    shop: collectionReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
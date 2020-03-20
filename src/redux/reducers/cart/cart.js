import * as cartActionType from '../../actions/cart/cartActionTypes';
import { addItemToCart, decreaseQuantity, increaseQuantity } from '../../utils/cartUtility'

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case cartActionType.TOGGLE_CART_STATE:
            return {
              ...state,
              hidden: !state.hidden  
            }
        case cartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionType.REMOVE_ITEM: 
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case cartActionType.INCREASE_QUANTITY: 
            return {
                ...state,
                cartItems: increaseQuantity(state.cartItems, action.payload)
            }
        case cartActionType.DECREASE_QUANTITY: 
            return {
                ...state,
                cartItems: decreaseQuantity(state.cartItems, action.payload)
        }
        default: 
        return state;
    }
}

export default cartReducer;
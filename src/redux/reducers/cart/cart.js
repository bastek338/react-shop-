import * as cartActionType from '../../actions/cart/cartActionTypes';
import { addItemToCart } from '../../utils/cartUtility'

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
        default: 
        return state;
    }
}

export default cartReducer;
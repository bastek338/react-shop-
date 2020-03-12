import * as cartActionType from './cartActionTypes';

export const toggleCartState = () => ({
        type: cartActionType.TOGGLE_CART_STATE
    }
)

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: { ...item }
})
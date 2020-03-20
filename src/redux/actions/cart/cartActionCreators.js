import * as cartActionType from './cartActionTypes';

export const toggleCartState = () => ({
        type: cartActionType.TOGGLE_CART_STATE
    }
)

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: { ...item }
})

export const removeItem = item => ({
    type: cartActionType.REMOVE_ITEM,
    payload: { ...item }
})

export const increaseQuantity = item => ({
    type: cartActionType.INCREASE_QUANTITY,
    payload: { ...item }
})

export const decreaseQuantity = item => ({
    type: cartActionType.DECREASE_QUANTITY,
    payload: { ...item }
})
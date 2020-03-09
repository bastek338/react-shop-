import * as actionType from './actionTypes';

export const setUser = user => {
    return {
        type: actionType.SET_CURRENT_USER,
        payload: user
    }
}
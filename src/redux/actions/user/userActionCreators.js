import * as actionType from './userActionTypes';

export const setUser = user => {
    return {
        type: actionType.SET_CURRENT_USER,
        payload: user
    }
}
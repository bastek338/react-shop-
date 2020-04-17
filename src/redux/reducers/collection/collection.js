import actionTypes from "../../actions/collection/actionTypes";

const INITIAL_STATE = {
    collection: null,
    isFetching: false,
    error: ''
};

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.FETCH_COLLECTION_START:
            console.log(action.collection) 
        return {
            ...state,
            isFetching: true
        }
        case actionTypes.FETCH_COLLECTION_SUCCESS: 
        return {
            ...state,
            collection: action.collection,
            isFetching: false
        }
        case actionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                erorr: action.error,
                isFetching: false
            }
        default:
            return state

    }
}

export default collectionReducer;


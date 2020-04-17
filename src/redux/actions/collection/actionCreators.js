import actionTypes from "./actionTypes";
import { firestore, transformCollectionToMap } from "../../../firebase/firebase";

export const fetchCollectionSuccess = (collection) => ({
    type: actionTypes.FETCH_COLLECTION_SUCCESS,
    collection
})

export const fetchCollectionFailure = error => ({
    type: actionTypes.FETCH_COLLECTION_FAILURE,
    error
})

export const fetchCollectionStart = () => ({
    type: actionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionStart())
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot( async snapshot => {
            try {
                const transformedCollection = await transformCollectionToMap(snapshot);
                dispatch(fetchCollectionSuccess(transformedCollection))
            } catch (error) {
                dispatch(fetchCollectionFailure(error.message))
            }
        })
    }
}
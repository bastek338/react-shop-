import { createSelector } from "reselect";


export const selectCollections = createSelector(
    [state => state.collection],
    collection => collection
)


export const selectCollectionsForOverview = createSelector(
    [selectCollections],
    collection => Object.keys(collection).map(key => collection[key])
)

export const selectCollectionForPreview = collectionName => createSelector(
    [selectCollections],
    collection => collection[collectionName]
)
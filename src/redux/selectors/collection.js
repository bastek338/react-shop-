import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectCollectionsForOverview = createSelector(
    [selectCollections],
    collection => collection ? Object.keys(collection).map(key => collection[key]) : []
)

export const selectCollectionForPreview = collectionName => createSelector(
    [selectCollections],
    collection => collection ? collection[collectionName] : null
)

export const selectStateOfFetch = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectCollectionLoaded = createSelector(
    [selectCollections],
    collection => collection
)

import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';


const ShopPage = ({ match }) => {
    return (
        <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collection`} component={CollectionPage}/>
        </div> 
    )

}

export default ShopPage;
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCollectionAsync } from '../../redux/actions/collection/actionCreators';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverviewContainer';
import CollectionPageComponent from '../CollectionPage/CollectionPageContainer';

const ShopPage = ({ match, fetchCollectionAsync}) => {
    
    useEffect(() => {
        fetchCollectionAsync();       
    }, [])

    return (
        <div>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
        <Route path={`${match.path}/:collection`} component={CollectionPageComponent} />
        </div> 
    )

}

const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
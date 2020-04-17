import { connect } from 'react-redux';
import { compose } from 'redux';
import withSpinner from '../../HOC/withSpinner';
import CollectionOverview from './CollectionOverview';
import { selectStateOfFetch } from '../../redux/selectors/collection';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
    isLoading: selectStateOfFetch
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;
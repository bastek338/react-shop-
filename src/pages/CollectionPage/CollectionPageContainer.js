import { connect } from 'react-redux';
import { compose } from 'redux';
import withSpinner from '../../HOC/withSpinner';
import CollectionPage from './CollectionPage';
import { createStructuredSelector } from 'reselect';
import { selectCollectionLoaded } from '../../redux/selectors/collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionLoaded(state)
})

const CollectionPageComponent = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage)

export default CollectionPageComponent
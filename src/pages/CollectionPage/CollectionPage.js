import React from 'react'
import { connect } from 'react-redux'
import { selectCollectionForPreview } from '../../redux/selectors/collection'
import CollectionItem from '../../components/CollectionsPreview/CollectionItem/CollectionItem'
import styles from './CollectionPage.module.scss';
import { withRouter } from 'react-router-dom';

const CollectionPage = ({collection}) => {
    const { title, items } = collection
    return (
        <div >
            <h2>{title}</h2>
            <div className={styles.Container}>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionForPreview(ownProps.match.params.collection)(state)
})

export default withRouter(connect(mapStateToProps)(CollectionPage))

import React from 'react'
import { connect } from 'react-redux'
import { selectCollectionForPreview } from '../../redux/selectors/collection'
import CollectionItem from '../../components/CollectionsPreview/CollectionItem/CollectionItem'
import styles from './CollectionPage.module.scss';

const CollectionPage = ({match, collection}) => {
    const { title, items } = collection
    console.log(items)
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

export default connect(mapStateToProps)(CollectionPage)

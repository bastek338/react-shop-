import React from 'react'
import styles from './CollectionOverview.module.scss'
import CollectionsPreview from '../CollectionsPreview/CollectionsPreview';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForOverview } from '../../redux/selectors/collection';
import { connect } from 'react-redux'

const CollectionOverview = ({collection}) => {
  return (
        <div className={styles.Container}>
        {collection.map(({id, ...otherCollectionItems}) => {
          return <CollectionsPreview key={id} {...otherCollectionItems} />
        })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForOverview
  })

export default connect(mapStateToProps)(CollectionOverview)

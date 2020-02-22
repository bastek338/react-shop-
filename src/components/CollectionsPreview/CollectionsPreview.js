import React from 'react';
import styles from '../CollectionsPreview/CollectionsPreview.module.scss';
import CollectionItem from './CollectionItem/CollectionItem';

const CollectionsPreview = ({title, items}) => {
    return (
        <div className={styles.CollectionsPreview}>
        <div className={styles.Title}>
            <h1>{title.toUpperCase()}</h1>
        </div>
            
            <div className={styles.Preview}>
                {items.filter((item, idx) => (item.id < 5 )).map(({id, ...otherCollectionItems}) => {
                    return (<CollectionItem key={id} {...otherCollectionItems}/>);
                })}
            </div>
        </div>
    )
}

export default CollectionsPreview;
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
                {items.map(item => {
                    return (<CollectionItem key={item.id} item={item}/>);
                })}
            </div>
        </div>
    )
}

export default CollectionsPreview;
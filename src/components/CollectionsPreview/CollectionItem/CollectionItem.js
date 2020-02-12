import React from 'react';
import styles from './CollectionItem.module.scss';

const CollectionItem = ({name, price, imageUrl}) => {
    return (
        <div className={styles.CollectionItem}>
            <div 
            className={styles.ImageItem}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className={styles.CollectionFooter}>
                <span className={styles.Name}>{name}</span>
                <span className={styles.Price}>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;
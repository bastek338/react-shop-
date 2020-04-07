import React from 'react';
import styles from '../CollectionsPreview/CollectionsPreview.module.scss';
import CollectionItem from './CollectionItem/CollectionItem';
import { Link, Route, Switch } from 'react-router-dom';

const CollectionsPreview = ({title, items}) => {
    return (
        <div className={styles.CollectionsPreview}>
        <div className={styles.Title}>
            <Link to={`/shop/${title.toLowerCase()}`}><h1>{title.toUpperCase()}</h1></Link>
        </div>
            <div className={styles.Preview}>
                {items.filter((items, idx) => idx < 4).map(item => {
                    return (<CollectionItem key={item.id} item={item}/>);
                })}
            </div>
                
        </div>
    )
}

export default CollectionsPreview;
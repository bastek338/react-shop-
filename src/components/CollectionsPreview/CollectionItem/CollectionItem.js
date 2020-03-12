import React from 'react';
import styles from './CollectionItem.module.scss';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/actions/cart/cartActionCreators';


const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
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
            <Button inverted click={() => addItem(item)}>add to cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
import React from 'react';
import styles from './CartItem.module.scss';


const CartItem = ({imageUrl, name, price, quantity}) => {

    return (
        <div className={styles.Item}>
                <img src={imageUrl} alt={name} className={styles.Image}/>
                <span>{name}</span>
                <span>{quantity} x {price} $</span>
            </div>
    )
}

export default CartItem;
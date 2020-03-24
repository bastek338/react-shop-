import React from 'react';
import styles from './CheckoutItem.module.scss';
import { removeItem, addItem, decreaseQuantity } from '../../../redux/actions/cart/cartActionCreators';
import { connect } from 'react-redux';


const CheckoutItem = ({cartItems, dispatch}) => {
    const {name, price, quantity, imageUrl} = cartItems
    return (
        <div className={styles.Container}>
            <div className={styles.Image}>
                <img alt={name} src={imageUrl}/>
            </div>
            <span>{name}</span>
            <span>{price} $</span>
            <div className={styles.Quantity}>
                <span className={styles.Arrow} onClick={() => dispatch(decreaseQuantity(cartItems))}>&#10092;</span> 
                <span>{quantity}</span> 
                <span className={styles.Arrow} onClick={() => dispatch(addItem(cartItems))}>&#10093;</span>
            </div>
            <span onClick={() => dispatch(removeItem(cartItems))}>&#10005;</span>
        </div>
    )
}

export default connect()(CheckoutItem)

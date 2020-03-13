import React from 'react';
import { connect } from 'react-redux';
import styles from './CartModal.module.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

const CartModal = ({cartItems, totalAmount}) => {
    const currentCart =  cartItems.map(({id, ...otherProps}) => {
        return <CartItem key={id} {...otherProps}/> 
        })
        
    return (
        <div className={styles.Container}>
            <div className={styles.Items}>
               {cartItems.length ? currentCart : <div className={styles.EmptyTitle}><span>Your cart is empty.</span></div>}
            </div> 
            {totalAmount ? <span className={styles.Amount}>Total Amount: {totalAmount} $</span> : null}
            <Button>go to checkout</Button>
        </div>
    )
};

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems,
    totalAmount: cartItems.reduce((previousValue, currentValue) => {
        return previousValue + (currentValue.quantity * currentValue.price)
    }, 0)
})

export default connect(mapStateToProps)(CartModal);
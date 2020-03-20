import React from 'react';
import CheckoutLeft from './CheckoutLeft/CheckoutLeft';
import styles from './Checkout.module.scss';

const Checkout = () => {
    return (
        <div className={styles.Container}>
            <CheckoutLeft />
            <div className={styles.Note}>
            <p>Add a note</p>
            <input type="text" placeholder="Some words to in House team"/>
            </div>
        </div>
    )
}

export default Checkout

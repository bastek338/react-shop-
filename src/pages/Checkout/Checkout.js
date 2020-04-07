import React from 'react';
import CheckoutLeft from './CheckoutLeft/CheckoutLeft';
import styles from './Checkout.module.scss';
import CheckoutRight from './CheckoutRight/CheckoutRight'

const Checkout = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <CheckoutLeft />
                <CheckoutRight />
            </div>
        </div>
    )
}

export default Checkout

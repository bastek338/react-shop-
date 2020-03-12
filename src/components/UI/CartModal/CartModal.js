import React from 'react';
import styles from './CartModal.module.scss';
import Button from '../Button/Button';

const CartModal = (props) => (
        <div className={styles.Container}>
            <div className={styles.Item}>
                <img alt="sample text"/>
                <span>Blue Jacket</span>
                <span>1</span>
            </div>
            <Button>go to checkout</Button>
        </div>
    );

export default CartModal;
import React from 'react'
import styles from './CheckoutLeft.module.scss';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/selectors/cart';

const CheckoutLeft = ({cartItems}) => {
    const items = cartItems.map(item => <CheckoutItem key={item.id} cartItems={item}/>)
    
    return (
        <div className={styles.Container}>
            <div className={styles.TableHeader}>
                <span>Product</span>
                <span>Name</span>
                <span>Price</span>
                <span>Qty</span>
                <span>Remove</span>
            </div>
            <div className={styles.TableBody}>  
                {items}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutLeft)

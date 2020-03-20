import React from 'react';
import { connect } from 'react-redux';
import styles from './CartModal.module.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { useHistory } from 'react-router-dom';
import { selectCartItemsAmount, selectCartItems } from '../../../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';
import { toggleCartState } from '../../../redux/actions/cart/cartActionCreators';


const CartModal = ({cartItems, totalAmount, dispatch}) => {
    let history = useHistory();
    
    const currentCart =  cartItems.map(({id, ...otherProps}) => {
        return <CartItem key={id} {...otherProps}/> 
        })

    const redirectToCheckout = () => {
        if(cartItems.length){
            history.push('/checkout')
            dispatch(toggleCartState())
        }
        else {
            dispatch(toggleCartState())
        }
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Items}>
                <div style={{margin: '10px', height: '100%'}}>
                    {cartItems.length ? currentCart : <div className={styles.EmptyTitle}><span>Your cart is empty.</span></div>}
                </div>
            </div> 
            {totalAmount ? <span className={styles.Amount}>Total Amount: {totalAmount} $</span> : null}
            <Button click={redirectToCheckout}>go to checkout</Button>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalAmount: selectCartItemsAmount
})

export default connect(mapStateToProps)(CartModal);
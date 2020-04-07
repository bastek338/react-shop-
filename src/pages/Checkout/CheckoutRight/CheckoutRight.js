import React from 'react'
import styles from './CheckoutRight.module.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsAmount } from '../../../redux/selectors/cart';
import { connect } from 'react-redux';
import StripeButton from '../../../components/UI/StripeButton/StripeButton';
import Checkbox from '../../../components/UI/Checkbox/Checkbox';
import { ReactComponent as Cart } from '../../../assets/images/SVG/cart.svg'

const CheckoutRight = ({amount}) => {
    return (
    
        <div className={styles.Container}>
        <div className={styles.MainWrapper}>
                <div className={styles.Line}></div>
                <div className={styles.WrapperAmount}>
                    <span className={styles.Text}>cart total: </span>
                    <span className={styles.Amount}>$ {amount}</span>
                </div>
                <div className={styles.Information}>
                    <span>We don't receive any cost for shipping.</span>
                </div>
                <div className={styles.Checkbox}>
                    <Checkbox>I agree to terms & conditions</Checkbox>
                </div>
                <div className={styles.StripeButton}>
                    <StripeButton amount={amount}/>
                </div>
                <div className={styles.CartIcon}>
                    <Cart/>
                </div>
        </div>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    amount: selectCartItemsAmount
})

export default connect(mapStateToProps)(CheckoutRight);

import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/images/SVG/cart-icon.svg';
import styles from './CartIcon.module.scss';
import { connect } from 'react-redux';
import { toggleCartState } from '../../../redux/actions/cart/cartActionCreators';

const CartIcon = ({toggleCartState}) => (
        <div className={styles.CartIcon} onClick={toggleCartState}>
            <ShoppingIcon className={styles.ShoppingIcon}/>
            <span className={styles.ItemCounter}>0</span>
        </div>
    );

const mapDispatchToProps = dispatch => {
    return {
        toggleCartState: () => dispatch(toggleCartState())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);
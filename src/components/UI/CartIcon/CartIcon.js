import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/images/SVG/cart-icon.svg';
import styles from './CartIcon.module.scss';
import { connect } from 'react-redux';
import { toggleCartState } from '../../../redux/actions/cart/cartActionCreators';
import { selectCartItemsCount } from '../../../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartState, quantity}) => (
        <div className={styles.CartIcon} onClick={toggleCartState}>
            <ShoppingIcon className={styles.ShoppingIcon}/>
            <span className={styles.ItemCounter}>{quantity}</span>
        </div>
    );

const mapDispatchToProps = dispatch => {
    return {
        toggleCartState: () => dispatch(toggleCartState())
    }
}

const mapStateToProps = createStructuredSelector({
    quantity: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
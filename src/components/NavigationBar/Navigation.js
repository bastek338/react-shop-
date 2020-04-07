import React from 'react';
import SVG from '../../assets/images/SVG/Logo';
import styles from './Navigation.module.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from '../UI/CartIcon/CartIcon';
import CartModal from '../UI/CartModal/CartModal';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors/user';
import { selectCartHidden } from '../../redux/selectors/cart';

const Navigation = ({openHandler, currentUser, hidden, history}) => {  
    
    const logout = () => {
        auth.signOut();
        (history.location.pathname !== "/") && history.push('/') 
    }

    return (
        <nav>
            <div className={styles.Navigation}>
                <div className={styles.OptionLeft}>
                    <div className={styles.Option}><NavLink to='/shop' activeClassName={styles.Active}>SHOP</NavLink></div>
                    <div className={styles.Option}><NavLink to='/about' activeClassName={styles.Active}>ABOUT</NavLink></div>   
                </div>
                <div className={styles.Logo}>
                <NavLink to="/"><SVG width="125" height="125"/></NavLink>
                </div>
                <div className={styles.OptionRight}>
                    <div className={styles.Option} onClick={() => openHandler('/myprofile', {type: 'initialLogin'})}>MY PROFILE</div>
                    <div className={styles.Option} onClick={() => {openHandler('/about', {type: 'initialLogin'})}}>BAG</div>
                    { currentUser ? (
                    <>
                        <div className={styles.Option} onClick={logout}>LOG OUT</div> 
                        <CartIcon/>
                    </>
                    ) :
                    <div className={styles.Option} onClick={() => openHandler('/', {type: 'login'})}>LOG IN</div>}
                </div>
            </div>
            { hidden ? null : <CartModal/> }
    </nav>   
        )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default withRouter(connect(mapStateToProps)(Navigation));
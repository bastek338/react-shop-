import React from 'react';
import SVG from '../../assets/images/SVG/Logo';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const Navigation = ({openHandler, dispatcher, currentUser}) => {  
    return (
            <nav className={styles.Navigation}>
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
                { currentUser ? 
                <div className={styles.Option} onClick={() => auth.signOut() }>LOG OUT</div> :
                <div className={styles.Option} onClick={() => openHandler('/', {type: 'login'})}>LOG IN</div>}
            </div>
    </nav>    
        )
};

export default Navigation;
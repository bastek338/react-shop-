import React from 'react';
import SVG from '../../assets/images/SVG/Logo';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => (
        <nav className={styles.Navigation}>
                <ul>
                    <li>
                        <NavLink to='/shop' activeClassName={styles.Active}>SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName={styles.Active}>ABOUT</NavLink>
                    </li>
                </ul>
                <NavLink to="/"><SVG width="125" height="125"/></NavLink>
                <ul>
                    <li>
                        <NavLink to='/shop' activeClassName={styles.Active}>MY PROFILE</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName={styles.Active}>BAG</NavLink>
                    </li>
                </ul>
        </nav>    
    );

export default Navigation;
import React, { useState, useContext } from 'react';
import classes from './Homepage.module.scss';
import Directory from '../../components/Directory/Directory';
import SideBar from '../../components/UI/SideBar/SideBar';
import SignIn from '../../components/SignIn/SignIn';
import {ClosedContext} from '../../App';
import SlideBarChanger from '../../components/SlideBarChanger/SlideBarChanger';

const HomePage = (props) => {

    return (
        <div className={classes.HomePage}>
            <Directory/>
            <SlideBarChanger />        
        </div>
    )
}

export default HomePage;
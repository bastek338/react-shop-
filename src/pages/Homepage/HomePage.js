import React from 'react';
import classes from './Homepage.module.scss';
import Directory from '../../components/Directory/Directory';
import SlideBarChanger from '../../components/SlideBarChanger/SlideBarChanger';

const HomePage = (props) => {
    return (
        <div className={classes.HomePage}>
            <Directory/>        
        </div>
    )
}

export default HomePage;
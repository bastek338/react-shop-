import React, { useContext } from 'react';
import styles from '../SideBar/SideBar.module.scss';
import { ReactComponent as Closer } from '../../../assets/images/SVG/close.svg';
import { ClosedContext } from '../../../App';
import useSlider from '../../../hooks/useSlider';


const SideBar = ({children}) => {

   const {closed, closeHandler} = useContext(ClosedContext);

    return (
        <div>
                <div className={`${styles.ContainerShadow} ${closed ? styles.ContainerShadowOpen : ''}`}/>
                <div className={`${styles.SideBar} ${closed ? styles.SideBarOpen : ''}`}>
                <span className={styles.Closer} onClick={closeHandler}><Closer/></span>
                {children}
                </div>
        </div> 
        )
        
          
};

export default SideBar;
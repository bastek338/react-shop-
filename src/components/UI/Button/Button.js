import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, color, click}) => (
        <button className={`${styles.Button} ${color ? styles[color] : ''}`} onClick={click}>{children}</button>    
    );

export default Button;
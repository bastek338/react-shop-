import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, color, type, click, large, style, inverted}) => (
        <button 
            style={style} 
            className={`${styles.Button} ${color ? styles[color] : ''} ${inverted && styles.Inverted}`} 
            onClick={click} 
            type={type}>
            {children}
        </button>    
    );

export default Button;
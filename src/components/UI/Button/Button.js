import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, color, type, click, large, style}) => (
        <button style={style} className={`${styles.Button} ${color ? styles[color] : ''} ${large && styles.Large}`} onClick={click} type={type}>{children}</button>    
    );

export default Button;
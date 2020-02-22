import React from 'react';
import styles from './FormInput.module.scss';

const FormInput = ({label, ...otherProps}) => (
        <div className={styles.Group}>
            <input className={styles.FormInput} {...otherProps}/>
            {label ? (<label
            className={`${styles.FormLabel} ${otherProps.value.length ? styles.Shrink : ''}`}
            >
            {label}
            </label>)
            : null}
            
        </div>  
    );

export default FormInput;
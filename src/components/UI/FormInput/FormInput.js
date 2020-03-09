import React from 'react';
import styles from './FormInput.module.scss';

const FormInput = ({label, formik, name, ...otherProps}) => {
    return (
        <div className={styles.Group}>
            <input className={styles.FormInput} {...otherProps} {...formik.getFieldProps(name)}/>
            {label ? (<label
            className={`${styles.FormLabel} ${formik.values[name].length ? styles.Shrink : ''}`}
            >
            {label}
            </label>)
            : null}
            {formik.errors[name] && formik.touched[name] ? <div style={{color: '#d13434'}}>{formik.errors[name]}</div> : null}
        </div>  
    )};

export default FormInput;
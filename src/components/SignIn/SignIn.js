import React from 'react';
import styles from './SignIn.module.scss';
import { useFormik } from 'formik';
import FormInput from '../UI/FormInput/FormInput';
import Button from '../UI/Button/Button';
import * as Yup from 'yup';


const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, 
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .required()
            .email()
        })
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.Form}>
            <h5 className={styles.LoginTitle}>login</h5>
            <FormInput label="Email" type="email" {...formik.getFieldProps('email')}/>
            <FormInput label="Password" type="password" {...formik.getFieldProps('password')}/>
            <div className={styles.ButtonGroup}>
                <Button>sign in</Button>
                <Button color="Red">sign in with google</Button>
            </div>
        </form>
    )
}

export default SignIn;
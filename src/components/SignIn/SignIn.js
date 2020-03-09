import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import {Formik, Form } from 'formik';
import FormInput from '../UI/FormInput/FormInput';
import Button from '../UI/Button/Button';
import * as Yup from 'yup';
import { auth, signInWithGoogle } from '../../firebase/firebase';

const SignIn = () => {
    const [error, setError] = useState('');

    return (
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        onSubmit={async (values) => {
        const {email, password} = values;
        console.log(values)
    try {
        await auth.signInWithEmailAndPassword(email, password);
   } catch (err) {
       console.error(`Something went wrong: ${err.message}`)
       setError(err);
   }
}}
        validationSchema={Yup.object({
            email: Yup.string()
            .required('This field is required')
            .email('Invalid email'),
            password: Yup.string()
            .required('This field is required')
        })}
        >
            {(formik) => (
                <>
                <Form className={styles.Form}>
                    <h5 className={styles.LoginTitle}>login</h5>
                    <FormInput name="email" label="Email" type="email" formik={formik}/>
                    <FormInput name="password" label="Password" type="password"  formik={formik}/>
                    <Button type="submit">sign in</Button>
                </Form>
                    <Button style={{position: 'relative', top: '-63.5px', left: '200px', overflow: 'hidden'}} color="Red" click={signInWithGoogle}>sign in with google</Button>
                    {error && <p style={{color: 'red'}}>{error.message}</p>}
                </>
            )}
        </Formik>
    )
}

export default SignIn;
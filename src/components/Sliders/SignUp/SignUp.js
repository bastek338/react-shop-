import React from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../UI/FormInput/FormInput';
import Button from '../../UI/Button/Button';
import { auth, createUserProfile } from '../../../firebase/firebase';

const SignUp = (props) => (
                <Formik
                initialValues={{
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    acceptTerms: false
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                    .email('This email is invalid')
                    .required('This field is required'),
                    password: Yup.string()
                    .required('This field is required')
                    .min(8, 'Password must be 8 characters or longer')
                    .matches(/(?=.*[0-9])/, 'Password must contain at least 1 numeric character'),
                    confirmPassword: Yup.string()
                    .required('This field is required')
                    .test('Comparing', 'Confirm password is not the same like password field', function(value){
                        return value === this.parent.password
                    })
                })}
                onSubmit={async (values) => {
                    const { displayName, email, password } = values;
                    try {
                    const { user } = await auth.createUserWithEmailAndPassword(email, password);

                    const userAuth = await createUserProfile(user, { displayName })

                    console.log(userAuth);

                    } catch (error) {console.log(`Error has occured: ${error.message}`)}
                }}
                >
                {(formik) => {
                    return (
                        <Form>
                            <FormInput name="displayName" type="text" label="Display Name" formik={formik}/>
                            <FormInput name="email" type="email" label="Email" formik={formik}/>
                            <FormInput name="password" type="password" label="Password" formik={formik}/>
                            <FormInput name="confirmPassword" type="password" label="Confirm Password" formik={formik}/>
                            <Button type="submit" large>Sign Up</Button>
                        </Form> 
                        )
                }
                }
                </Formik>  
    );

export default SignUp; 
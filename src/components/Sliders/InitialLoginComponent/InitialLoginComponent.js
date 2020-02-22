import React from 'react';
import Button from '../../UI/Button/Button';
import FormInput from '../../UI/FormInput/FormInput';
import styles from './InitialLoginComponent.module.scss'

const InitialLoginComponent = ({dispatch}) => (
        <div>
            <h5 className={styles.Title}>My profile</h5>
            <p className={styles.Caption}>Create an account or log in to enjoy all the benefits of havoing your own private space.</p>
            <div className={styles.ButtonGroup}>
                <Button click={() => dispatch({type: 'register'})}>Create an account</Button>
                <Button click={() =>  dispatch({type: 'login'}) }>Log in</Button>
            </div>
         
        </div>
    );

export default InitialLoginComponent;
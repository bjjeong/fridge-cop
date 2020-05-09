import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, Icon, Dialog, Button } from '@blueprintjs/core';
import * as firebase from 'firebase';

import { AuthContext } from '../../App';
import { googleProvider } from '../../firebase.config';
import iconGoogle from '../../images/google.svg';

const Login = ({ isOpen, onClose }) => {
    const Auth = useContext(AuthContext);

    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);

    const changeEmail = (e) => setEmail(e.target.value);

    const changePassword = (e) => setPassword(e.target.value);

    const googleSignIn = async () => {
        try {
            const result = await firebase.auth().signInWithPopup(googleProvider);
            // const token = result.credential.accessToken;
            const { user } = result;
            Auth.setUser(user);
            onClose();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const { email } = error;
            const { credential } = error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);

            if (result.user) {
                Auth.setUser(result.user);
                onClose();
            }
        } catch (e) {
            setErrors(e.message);
        }
    };

    const handleClose = () => onClose();

    return (
        <Dialog
            isOpen={isOpen}
            backdropClassName="dialog-backdrop"
            style={styles.dialogContainer}
            onClose={handleClose}
        >
            <div style={styles.innerContainer}>
                {
                    showForm ? (
                        <>
                            <h2 style={styles.headerText}>Log In with Email</h2>
                            <p style={styles.subText}>Enter your email address to set up an account.</p>
                            <FormGroup
                                label="Email"
                                labelInfo={errors}
                                style={{ width: '100%' }}
                            >
                                <InputGroup
                                    intent="primary"
                                    style={styles.input}
                                    value={email}
                                    onChange={changeEmail}
                                    placeholder="Email"
                                    large
                                    fill
                                />
                            </FormGroup>
                            <FormGroup label="Password" style={{ width: '100%' }}>
                                <InputGroup
                                    intent="primary"
                                    style={styles.input}
                                    value={password}
                                    onChange={changePassword}
                                    placeholder="Password"
                                    type="password"
                                    large
                                    fill
                                />
                            </FormGroup>
                            <Button
                                style={{ marginBottom: '2vmin' }}
                                type="submit"
                                onClick={handleSubmit}
                                text="Log In"
                                intent="primary"
                                large
                            />
                            <span style={styles.signInText}>
                                <Button
                                    onClick={() => setShowForm(false)}
                                    intent="primary"
                                    icon="arrow-left"
                                    text="Go Back"
                                    minimal
                                />
                            </span>
                        </>
                    ) : (
                        <>
                            <h2 style={styles.headerText}>Log In</h2>
                            <p style={styles.subText}>Log in to save recipes and the ingredients you already have at home.</p>
                            <Button
                                onClick={googleSignIn}
                                text="Log in with Google"
                                alignText="left"
                                icon={<img src={iconGoogle} alt="Google" />}
                                style={{ ...styles.authButton, marginBottom: 10 }}
                                outlined
                            />
                            <Button
                                onClick={() => setShowForm(true)}
                                text="Log in with Email"
                                alignText="left"
                                icon={<Icon icon="envelope" iconSize={20} />}
                                style={styles.authButton}
                                outlined
                            />
                            <span style={styles.logInText}>
                                Don't have an account yet?
                                <Button
                                    intent="primary"
                                    text="Sign Up"
                                    // onClick={() => setFormType(isLogin ? 'signup' : 'login')}
                                    minimal
                                />
                            </span>
                        </>
                    )
                }
            </div>
        </Dialog>
    );
};

const styles = {};

styles.dialogContainer = {
    display: 'flex',
    flexDirection: 'collumn',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
    backgroundColor: '#fff',
    height: '50vh',
};

styles.innerContainer = {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
};

styles.headerText = {
    fontFamily: 'Georgia,serif',
    fontSize: 'calc(10px + 2vmin)',
};

styles.subText = {
    fontSize: 'calc(5px + 1vmin)',
    lineHeight: 1.4,
    fontFamily: 'Maison,sans-serif',
    marginBottom: '4vmin',
    textAlign: 'center',
};

styles.logInText = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4vmin',
};

styles.authButton = {
    padding: '10px 15px',
    width: '50%',
};

styles.input = {
    padding: '10px 40px',
    borderRadius: 5,
    width: '100%',
};

Login.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Login;

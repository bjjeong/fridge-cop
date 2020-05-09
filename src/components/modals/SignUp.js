import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, InputGroup, Icon, Dialog, Button } from '@blueprintjs/core';
import * as firebase from 'firebase';

import { AuthContext } from '../../App';
import { googleProvider } from '../../firebase.config';
import iconGoogle from '../../images/google.svg';

const Signup = ({ isOpen, onClose }) => {
    const Auth = useContext(AuthContext);
    const dispatch = useDispatch();

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
                .createUserWithEmailAndPassword(email, password);

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
                            <h2 style={styles.headerText}>Sign Up with Email</h2>
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
                                text="Create Account"
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
                            <h2 style={styles.headerText}>Sign Up</h2>
                            <p style={styles.subText}>Create an account to save recipes and the ingredients you already have at home.</p>
                            <Button
                                onClick={googleSignIn}
                                text="Sign up with Google"
                                alignText="left"
                                icon={<img src={iconGoogle} alt="Google" />}
                                style={{ ...styles.authButton, marginBottom: 10 }}
                                outlined
                            />
                            <Button
                                onClick={() => setShowForm(true)}
                                text="Sign up with Email"
                                alignText="left"
                                icon={<Icon icon="envelope" iconSize={20} />}
                                style={styles.authButton}
                                outlined
                            />
                            <span style={styles.logInText}>
                                Already have an account?
                                <Button
                                    intent="primary"
                                    text="Log In"
                                    onClick={() => {}}
                                    minimal
                                    style={{
                                        fontSize: 'calc(8px + 0.75vmin)',
                                        fontFamily: 'Maison,sans-serif',
                                    }}
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
    width: 'calc(140px + 50vmin)',
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
    fontSize: 'calc(8px + 0.75vmin)',
    fontFamily: 'Maison,sans-serif',
};

styles.authButton = {
    padding: '10px 15px',
    width: 'calc(150px + 10vmin)',
    fontSize: 'calc(8px + 0.75vmin)',
    fontFamily: 'Maison,sans-serif',
};

styles.input = {
    padding: '10px 40px',
    borderRadius: 5,
    width: '100%',
};

Signup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Signup;

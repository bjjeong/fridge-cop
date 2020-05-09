import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, FormGroup, InputGroup, Icon, Dialog, Button } from '@blueprintjs/core';
import * as firebase from 'firebase';

import { AuthContext } from '../../App';
import iconGoogle from '../../images/google.svg';

const SignUp = ({ isOpen, onClose }) => {
    const Auth = useContext(AuthContext);
    const dispatch = useDispatch();

    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);

    const changeEmail = (e) => setEmail(e.target.value);

    const changePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch((e) => {
                setErrors(e.message);
            });
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
                            <FormGroup label="Email" style={{ width: '100%' }}>
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
                            <span style={styles.signInText}>
                                Already have an account?
                                <Button
                                    intent="primary"
                                    text="Sign In"
                                    onClick={() => {}}
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

styles.signInText = {
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
    borderRadius: 0,
    width: '100%',
};

export default SignUp;

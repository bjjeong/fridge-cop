import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as Nav, AnchorButton, Icon, Popover, Menu, MenuItem, Button } from '@blueprintjs/core';
import * as firebase from 'firebase';

import iconLinkedin from '../../images/icon-linkedin.svg';
import iconInstagram from '../../images/icon-instagram.svg';
import iconLemon from '../../images/icon-lemon.svg';
import Signup from '../modals/Signup';
import Login from '../modals/Login';
import { AuthContext } from '../../App';

const Navbar = () => {
    const Auth = useContext(AuthContext);

    const [signupOpen, setSignupOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const handleSignupClose = () => setSignupOpen(false);

    const handleSignupOpen = () => setSignupOpen(true);

    const handleLoginClose = () => setLoginOpen(false);

    const handleLoginOpen = () => setLoginOpen(true);

    const handleLogOut = async () => {
        try {
            await firebase.auth().signOut();
            Auth.setUser(null);
        } catch (error) {
            // Display the error
        }
    };

    return (
        <div>
            <Nav style={styles.container}>
                <Nav.Group align="left">
                    <Nav.Heading>
                        <NavLink to="/">
                            <div
                                style={{ ...styles.navText }}
                            >
                                <Icon icon="search" style={{ marginRight: 8 }} />
                                fridge cop
                            </div>
                        </NavLink>
                    </Nav.Heading>
                </Nav.Group>
                <Nav.Group align="right">
                    <AnchorButton
                        href="https://www.linkedin.com/in/bjjeong/"
                        target="_blank"
                        title="LinkedIn"
                        icon={<img alt="LinkedIn" src={iconLinkedin} />}
                        minimal
                    />
                    <AnchorButton
                        href="https://www.instagram.com/bjjeong/"
                        target="_blank"
                        title="Instagram"
                        icon={<img alt="Instagram" src={iconInstagram} />}
                        minimal
                    />
                    {
                        Auth.user ? (
                            <Popover>
                                <Button
                                    icon={<img alt="User" src={Auth.user.photoURL || iconLemon} style={styles.photo} />}
                                    minimal
                                />
                                <Menu key="user">
                                    <MenuItem
                                        text="Log Out"
                                        onClick={handleLogOut}
                                    />
                                </Menu>
                            </Popover>
                        ) : (
                            <>
                                <Button
                                    style={styles.buttonText}
                                    onClick={handleSignupOpen}
                                    text="sign up"
                                    minimal
                                />
                                <Button
                                    style={styles.buttonText}
                                    onClick={handleLoginOpen}
                                    text="log in"
                                    minimal
                                />
                            </>
                        )
                    }
                </Nav.Group>
            </Nav>
            <Signup
                isOpen={signupOpen}
                onClose={handleSignupClose}
            />
            <Login
                isOpen={loginOpen}
                onClose={handleLoginClose}
            />
        </div>
    );
};

const styles = {};

styles.container = {
    boxShadow: 'none',
    backgroundColor: '#FFB697',
};

styles.navText = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 'calc(10px + 1vmin)',
    fontWeight: '600',
    color: '#004968',
    fontFamily: 'Maison,sans-serif',
};

styles.buttonText = {
    fontSize: 'calc(4px + 1vmin)',
    fontWeight: '600',
    color: '#004968',
    fontFamily: 'Maison,sans-serif',
};

styles.photo = {
    height: 20,
    width: 20,
    borderRadius: 10,
    objectFit: 'cover',
};

export default Navbar;

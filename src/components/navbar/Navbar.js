import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as Nav, AnchorButton, Icon, Popover, Menu, MenuItem, Button } from '@blueprintjs/core';

import iconLinkedin from '../../images/icon-linkedin.svg';
import iconGitHub from '../../images/icon-github.svg';
import iconInstagram from '../../images/icon-instagram.svg';
import iconLemon from '../../images/icon-lemon.svg';
import Signup from '../modals/Signup';
import Login from '../modals/Login';

const Navbar = () => {
    const [signupOpen, setSignupOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const handleSignupClose = () => setSignupOpen(false);

    const handleSignupOpen = () => setSignupOpen(true);

    const handleLoginClose = () => setLoginOpen(false);

    const handleLoginOpen = () => setLoginOpen(true);

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
                    {/* <AnchorButton
                        href="https://www.linkedin.com/in/bjjeong/"
                        target="_blank"
                        title="LinkedIn"
                        icon={<img alt="LinkedIn" src={iconLinkedin} />}
                        minimal
                    />
                    <AnchorButton
                        href="https://github.com/bjjeong/"
                        target="_blank"
                        title="GitHub"
                        icon={<img alt="GitHub" src={iconGitHub} />}
                        minimal
                    />
                    <AnchorButton
                        href="https://www.instagram.com/bjjeong/"
                        target="_blank"
                        title="Instagram"
                        icon={<img alt="Instagram" src={iconInstagram} />}
                        minimal
                    /> */}
                    <Button
                        style={styles.navText}
                        onClick={handleSignupOpen}
                        text="sign up"
                        minimal
                    />
                    <Button
                        style={styles.navText}
                        onClick={handleLoginOpen}
                        text="log in"
                        minimal
                    />
                    <Popover>
                        <Button
                            icon={<img alt="User" src={iconLemon} />}
                            minimal
                        />
                        <Menu key="user">
                            <MenuItem
                                text="About"
                                // onClick={handleSignupOpen}
                            />
                        </Menu>
                    </Popover>
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

export default Navbar;

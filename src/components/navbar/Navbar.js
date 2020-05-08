import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as Nav, AnchorButton, Icon } from '@blueprintjs/core';
import iconLinkedin from './icon-linkedin.svg';
import iconGitHub from './icon-github.svg';
import iconInstagram from './icon-instagram.svg';

const Navbar = () => {
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
                    />
                </Nav.Group>
            </Nav>
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

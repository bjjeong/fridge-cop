import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Navbar as Nav, Button, AnchorButton } from '@blueprintjs/core';
import routes from '../routes';

const Navbar = () => {
    return (
        <div>
            <Nav style={styles.container}>
                <Nav.Group align="left">
                    <Nav.Heading>
                        <div
                            style={{ ...styles.navText, fontSize: 18 }}
                        >
                            Fridge Inspector
                        </div>
                    </Nav.Heading>
                </Nav.Group>
                <Nav.Group align="right">
                    <NavLink to="/about">
                        <Button
                            text="About"
                            minimal
                            style={styles.navText}
                        />
                    </NavLink>
                    <AnchorButton
                        href="https://linkedin.com/in/bjjeong"
                        target="_blank"
                        text="Contact"
                        minimal
                        style={styles.navText}
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
    fontSize: 18,
    fontWeight: '600',
    color: '#004968',
    fontFamily: 'Maison,sans-serif',
};

export default Navbar;

import React from 'react';
import Navbar from '../components/Navbar';


const withNavbar = (Component) => (props) => {
    return (
        <div style={styles.container}>
            <Navbar />
            <Component {...props} />
        </div>
    );
};

const styles = {};
styles.container = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
};

export default withNavbar;

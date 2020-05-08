import React, { useState } from 'react';
import PropTypes from 'prop-types';
import spinner from './spinner.gif';

const Image = ({ src, alt, style, ...rest }) => {
    const [status, setStatus] = useState('loading');
    const onLoad = () => {
        setStatus('loaded');
    };

    const onError = () => {
        setStatus('error');
    };

    if (status === 'loading') {
        return (
            <img
                onLoad={onLoad}
                onError={onError}
                src={spinner}
                alt={alt}
                style={style}
            />
        );
    }

    if (status === 'error') {
        return (
            <img
                src={spinner}
                alt={alt}
                style={style}
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            style={style}
            onLoad={onLoad}
            onError={onError}
            {...rest}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object,
};

Image.defaultProps = {
    alt: '',
    style: {},
};

export default Image;

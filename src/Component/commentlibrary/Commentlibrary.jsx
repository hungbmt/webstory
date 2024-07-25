// CommentLibrary.js
import React, { useEffect } from 'react';
import initFacebookSDK from '../../utils/Facebookdeveloper';

const CommentLibrary = ({ host }) => {
    useEffect(() => {
        const initializeSDK = async () => {
            await initFacebookSDK();
            if (window.FB) {
                window.FB.XFBML.parse();
            }
        };

        initializeSDK();
    }, [host]);

    return <div className="fb-comments" data-href={host} data-width="" data-numposts="5"></div>;
};

export default CommentLibrary;

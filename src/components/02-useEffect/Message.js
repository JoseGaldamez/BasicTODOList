import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Message = () => {

    const mousemove = (e) => {
        console.log(":D");
    }


    useEffect(() => {
        
        window.addEventListener('mousemove', mousemove);

        return () => {
            window.removeEventListener('mousemove',mousemove);
        }
    }, []);


    return (
        <div>
            <p>Eres genial</p>
        </div>
    );
};

Message.propTypes = {};

export default Message;
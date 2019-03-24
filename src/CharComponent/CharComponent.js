import React from 'react';

const charComponent = (props) => {
    const charStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };
    return (
        <p style={charStyle} onClick={props.click} key={props.key}>{props.children}</p>
    )
};

export default charComponent;

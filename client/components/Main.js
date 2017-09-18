import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    return(
        <div>
            <h1>
                <Link to="/">Main</Link>
            </h1>
            {React.cloneElement(props.children, props)}
        </div>
    );
};
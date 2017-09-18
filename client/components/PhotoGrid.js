import React from 'react';
import Photo from './Photo';

export default (props) => {
    return (
        <div className="photo-grid">
             {props.posts.map((post, i) => <Photo {...props} key={i} i={i} post={post} />)}
        </div>
    );
}
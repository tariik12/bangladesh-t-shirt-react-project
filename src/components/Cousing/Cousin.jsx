import React from 'react';
import Friend from '../Friend/Friend';

const Cousin= ({children,hasFriend,ring}) => {
    return (
        <div>
            <h6>Cousin</h6>
            <p><small>{children}</small></p>
           {hasFriend && <Friend  ring={ring}/>} 
        </div>
    );
};

export default Cousin;
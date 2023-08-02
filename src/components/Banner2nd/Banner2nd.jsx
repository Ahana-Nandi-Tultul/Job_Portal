import React, { Children } from 'react';
import './Banner2nd.css'

const Banner2nd = ({children}) => {
    return (
        <div className='flex justify-center items-center py-24 banner2nd'>
            {children}
        </div>
    );
};

export default Banner2nd;
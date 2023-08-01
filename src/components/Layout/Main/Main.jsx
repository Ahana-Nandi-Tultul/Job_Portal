import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className=' container mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
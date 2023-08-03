import React, { useState } from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Main = () => {
    const [jobsList, setjobsList] = useState([]);
    return (
        <div>
                <Header></Header>
                <Toaster />
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default Main;
import React, { createContext, useState } from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { Toaster } from 'react-hot-toast';

export const JobsListsContext = createContext([]);

const Main = () => {
    const [jobsList, setjobsList] = useState([]);
    return (
        <div>
            <JobsListsContext.Provider value={[jobsList, setjobsList]}>
                <Header></Header>
                <Toaster />
                <Outlet></Outlet>
                <Footer></Footer>
            </JobsListsContext.Provider>
        </div>
    );
};

export default Main;
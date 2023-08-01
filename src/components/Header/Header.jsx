import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='nav relative px-4'>
            <nav className=' container mx-auto flex justify-between items-center py-8'>
                <Link to="/" className='text-black font-extrabold font-sans text-4xl '>Job Portal</Link>
                <div className='md:hidden' onClick={() => setOpen(!open)}> 
                    {
                        open === true ? <XMarkIcon className="h-8 w-8 text-blue-500" /> :
                        <Bars3Icon className="h-8 w-8 text-blue-500" />
                    }
                </div>
                <div className={`md:flex flex-col md:flex-row  gap-6 font-bold text-neutral-500 absolute md:static duration-500 
                ${open ? 'top-20' : '-top-96'}`}>
                        <div>
                             <Link to="/statistics">Statistics</Link>
                        </div> 
                        <div>
                            <Link to="/applied-jobs">Applied Jobs</Link>
                        </div>
                        <div>
                            <Link to="/Blog">Blog</Link>
                        </div>
                    </div>
                <button className={`py-2 px-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white 
                font-bold text-lg rounded-lg absolute md:static duration-500 ${open ? 'top-40' : '-top-96'}`}>Start Applying</button>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import person from '../../assets/AllImages/person.png';

const Banner = () => {
    return (
        <div className='nav px-4'>
            <div className='md:flex container mx-auto justify-center items-center'>
                <div>
                    <h2 className='font-sans text-6xl font-bold mb-6'>One Step <br/> Closer To Your <br />
                    <span className='text-blue-700'>Dream Job</span></h2>
                    <p className='mb-6 text-slate-600 text-lg'>Explore thousands of job opportunities with all the <br/> information you need. 
                        Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <div>
                            <button className='mx-auto py-2 px-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white 
                        font-bold text-lg rounded-lg'>Get Started</button>
                        </div>
                </div>
                <div className=''>
                    <img style={{height: '500px'}} src={person} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import socialMedia from '../../assets/Icons/Group-9969.png';

const Footer = () => {
    return (
        <div className='bg-black text-white w-full'>
            <div className='container mx-auto md:px-12  py-20 p-4'>
                <div className='grid md:grid-cols-5 grid-cols-2 text-center md:text-left gap-5'>
                    <div>
                        <h2 className='font-bold text-4xl mb-5'>Jobs Portal</h2>
                        <p className='text-slate-300 mb-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img src={socialMedia} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl mb-3'>Company</h4>
                        <p className='text-slate-300 mb-2'>About Us</p>
                        <p className='text-slate-300 mb-2'>Work</p>
                        <p className='text-slate-300 mb-2'>Latest News</p>
                        <p className='text-slate-300 mb-2'>Careers</p>
                    </div>
                    <div>
                    <h4 className='text-xl mb-3'>Product</h4>
                        <p className='text-slate-300 mb-2'>Prototype</p>
                        <p className='text-slate-300 mb-2'>Plans & Pricing</p>
                        <p className='text-slate-300 mb-2'>Customers</p>
                        <p className='text-slate-300 mb-2'>Integrations</p>
                    </div>
                    <div>
                        <h4 className='text-xl mb-3'>Support</h4>
                        <p className='text-slate-300 mb-2'>Help Desk</p>
                        <p className='text-slate-300 mb-2'>Sales</p>
                        <p className='text-slate-300 mb-2'>Become a Partner</p>
                        <p className='text-slate-300 mb-2'>Developers</p>
                    </div>
                    <div>
                        <h4 className='text-xl mb-3'>Contact</h4>
                        <p className='text-slate-300 mb-2'>524 Broadway , NYC</p>
                        <p className='text-slate-300 mb-2'>+1 777 - 978 - 5570</p>
                    </div>
                </div>
                <hr className='h-px my-8 bg-slate-700 border-0'/>
                <div className='md:flex text-center justify-between items-center text-slate-300'>
                    <p>@2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by CareerHub</p>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('JobCategories.json')
        .then(res => res.json())
        .then(data => setCategory(data.jobCategories))
    }, [])
    return (
        <div>
            {/* Banner Component */}
            <Banner></Banner>

            {/* Job Category List */}
            <div className='my-20 container mx-auto px-4'>
                <div className='text-center'>
                    <h2 className='font-sans font-bold text-4xl mb-2'>Job Category List</h2>
                    <p className='text-slate-600 text-lg mb-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='md:flex justify-evenly items-center p-2'>
                    {
                        categories.map(category => <JobCategory 
                            category = {category}
                            key = {category.id}></JobCategory>)
                    }
                </div>
            </div>

            {/* Featured Jobs */}
            <div className='my-20 container mx-auto px-4'>
                <div className='text-center'>
                    <h2 className='font-sans font-bold text-4xl mb-2'>Featured Jobs</h2>
                    <p className='text-slate-600 text-lg mb-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;
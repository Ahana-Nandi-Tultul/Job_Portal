import React from 'react';

const JobCategory = ({category}) => {
    const {id, name, logo, availableJobs} = category
    return (
        <div className='md:m-2 mb-2 nav w-full p-4 rounded-lg'>
            <img src={logo} alt="" className='mb-6' />
            <h4 className='font-bold text-xl'>{name}</h4>
            <p className='text-slate-500 font-extralight'>{availableJobs} Jobs Available</p>
        </div>
    );
};

export default JobCategory;
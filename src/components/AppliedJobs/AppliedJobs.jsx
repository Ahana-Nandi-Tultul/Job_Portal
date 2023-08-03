import React, { useState } from 'react';
import Banner2nd from '../Banner2nd/Banner2nd';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const AppliedJobs = () => {
    const {storedAppliedJobs} = useLoaderData();
    // console.log(storedAppliedJobs);
    const [jobs, setJobs] = useState(storedAppliedJobs);
    const [open, setOpen] = useState(false);
    const handleFilterRemote = () => {
        console.log('remote')
        const remoteJobs = storedAppliedJobs.filter(job => job.remoteOrOnsite === 'Remote');
        setJobs(remoteJobs);
    }
    const handleFilterOnsite = () => {
        console.log('Onsite')
        const remoteJobs = storedAppliedJobs.filter(job => job.remoteOrOnsite === 'Onsite');
        setJobs(remoteJobs);
    }
    return (
        <div>
            <Banner2nd><h4 className="text-3xl font-bold">Applied Jobs</h4></Banner2nd>
            <div className='container px-4 md:px-12 gap-6 my-24 md:mx-12'>
                <div className={`mb-4 flex justify-end items-end relative`}>
                   <span>
                    <button className=' p-5 nav rounded-lg text-lg font-medium flex gap-3 items-
                    ' onClick={() => setOpen(!open)}>
                        <span>Filter By</span>  
                        <FontAwesomeIcon icon={faChevronDown} /></button>
                        {
                            open ? <div className={ `px-9 py-4 bg-slate-500 text-white
                             rounded-b-lg text-lg absolute duration-500 ${open ? 'top-18' : '-top-96'}`}>
                                <button onClick={() => handleFilterRemote()}>Remote</button> <br /> 
                                <button onClick={() => handleFilterOnsite()}>On-site</button></div> : ''
                        }
                        
                   </span> 

                </div>
            {
                jobs.map(job => <FeaturedJob
                key = {job.id}
                job = {job}
                isAppliedJobs = {true}></FeaturedJob>)
           }
            </div>
        </div>
    );
};

export default AppliedJobs;
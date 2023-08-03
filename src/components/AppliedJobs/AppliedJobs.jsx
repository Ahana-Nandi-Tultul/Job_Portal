import React, { useState } from 'react';
import Banner2nd from '../Banner2nd/Banner2nd';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from 'react-router-dom';


const AppliedJobs = () => {
    const {storedAppliedJobs} = useLoaderData();
    console.log(storedAppliedJobs);
    const [jobs, setJobs] = useState(storedAppliedJobs);
    
    return (
        <div>
            <Banner2nd><h4 className="text-3xl font-bold">Applied Jobs</h4></Banner2nd>
            <div className='container px-4 md:px-12 gap-6 my-24 md:mx-12'>
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
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Banner2nd from '../Banner2nd/Banner2nd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCreditCardAlt, 
    faDollarSign, 
    faPhone, 
    faEnvelope,
    faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { addItemToLocalStorage } from '../Utilities/fakeDb';
import toast, { Toaster } from 'react-hot-toast';


const JobDetails = () => {
    const {jobId, storedAppliedJobs, loadedJobs} = useLoaderData();
    const navigate = useNavigate();
    
    const [jobs, setJobs] = useState(storedAppliedJobs);
    
    const jobDetails = loadedJobs.find(job => job.id == jobId);
    console.log(jobs, jobId, jobDetails)
    const {id, jobDescription, 
        jobResponsibility, educationalRequirements, 
        experiences, salary, jobTitle, 
        contactInformation, location} = jobDetails;
    const {phone, email} = contactInformation;

    const notify = () => toast('You have already applied in this post.');

    const handleAppliedJobs = (jobDetails) => {
        let exists = jobs.find(job => job.id === jobDetails.id);
        if(exists){
            notify()
        }
        else{

            let newAppliedJobs = [...jobs, jobDetails];
            setJobs(newAppliedJobs);
            addItemToLocalStorage(jobDetails.id);
            navigate('/applied-jobs');
        }
    }

    return (
        <div>
            <Banner2nd key={id}><h4 className="text-3xl font-bold">Job Details</h4></Banner2nd>
            <div className='grid grid-cols-3 container px-4 gap-6 my-24 md:mx-12'>
                <div className='col-span-2'>
                    <p className='mb-6'><strong>Job Description: </strong><span className='text-slate-500'>{jobDescription}</span></p>
                    <p className='mb-6'><strong>Job Responsibility: </strong><span className='text-slate-500'>{jobResponsibility}</span></p>
                    <p className='mb-2'><strong>Educational Requirements: </strong></p>
                    <p className='mb-6 text-slate-500'>{educationalRequirements}</p>
                    <p className='mb-2'><strong>Experiences:</strong></p>
                    <p className='mb-6 text-slate-500'>{experiences}</p>
                </div>
                <div>
                    <div className='nav p-8 rounded-lg mb-6'>
                        <div>
                            <h2 className='font-bold text-xl mb-4'>Job Details</h2>
                            <hr className='mb-4' />
                            <p className='text-lg mb-4'><FontAwesomeIcon icon={faDollarSign} />
                            <span className='font-semibold'>    Salary : </span> <span className='text-slate-500'>{salary} (Per Month)</span></p>
                            <p className='text-lg'>
                            <FontAwesomeIcon icon={faCreditCardAlt} />
                                <span  className='font-semibold'>   Job Title :</span> <span className='text-slate-500'>{jobTitle}</span></p>
                        </div>
                        <div>
                            <h2 className='font-bold text-xl mb-4 mt-8'>Contact Information</h2>
                            <hr className='mb-4'/>
                            <p className='text-lg mb-4'>
                            <FontAwesomeIcon icon={faPhone} />
                            <span  className='font-semibold'>  Phone :</span> <span className='text-slate-500'>{phone}</span></p>
                            <p className='text-lg mb-4'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span  className='font-semibold'>   Email :</span> <span className='text-slate-500'>{email}</span>
                            </p>
                            <p className='text-lg mb-4'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span  className='font-semibold'>   Address : </span>
                                <span className='text-slate-500'>{location}</span></p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleAppliedJobs(jobDetails)} className='w-full py-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white 
                            font-bold text-lg rounded-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobsListsContext } from '../Layout/Main/Main';
import Banner2nd from '../Banner2nd/Banner2nd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCreditCardAlt, 
    faDollarSign, 
    faPhone, 
    faEnvelope,
    faLocationDot } from '@fortawesome/free-solid-svg-icons'


const JobDetails = () => {
    const jobId = useLoaderData();
    console.log(jobId);
    const [jobsList, setjobsList] = useContext(JobsListsContext);
    console.log(jobsList);

    const jobDetails = jobsList.find(job => job.id == jobId);
    const {id, jobDescription, 
        jobResponsibility, educationalRequirements, 
        experiences, salary, jobTitle, 
        contactInformation, location} = jobDetails;
    const {phone, email} = contactInformation;
    return (
        <div>
            <Banner2nd><h4 className="text-3xl font-bold">Applied Jobs</h4></Banner2nd>
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
                        <button className='w-full py-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white 
                            font-bold text-lg rounded-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
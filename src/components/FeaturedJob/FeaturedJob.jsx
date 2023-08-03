import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';


const FeaturedJob = ({job, isAppliedJobs}) => {
    const {id, companyLogo, jobTitle, companyName, location, salary, fulltimeOrPartTime, remoteOrOnsite} = job;
    // console.log(job);
    const navigate = useNavigate()
    const handleJobDetails = (id) =>{
        navigate(`/job/${id}`);
    }
    return (
        <div>
            <div className={`border border-slate-300 p-10 rounded-lg ${isAppliedJobs ? 'grid md:grid-cols-3 gap-5 mb-6' : 'grid'}`}>
                <div className={`${isAppliedJobs ? 'nav flex justify-center items-center px-10 rounded-lg' : ''}`}>
                    <img className='mb-6' style={{height: "40px"}} src={companyLogo} alt="" />
                </div>
                <div className={`${isAppliedJobs ? 'col-span-2 md:flex items-center' : 'grid'}`}>
                    <div className={`${isAppliedJobs ? 'flex-grow': ''}`}>
                        <h2 className='text-2xl font-bold mb-4'>{jobTitle}</h2>
                        <h4 className='text-slate-500 text-xl font-semibold mb-4'>{companyName}</h4>
                        <p className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent mb-4'>
                            <span className='border rounded px-5 py-2 me-2'>{remoteOrOnsite}</span>
                            <span className='border rounded px-5 py-2 '>{fulltimeOrPartTime}</span></p>
                        <p className='mb-4 text-slate-500'>
                            <span className='me-6'> <FontAwesomeIcon icon={faLocationDot} /> {location}</span> 
                            <span><FontAwesomeIcon icon={faDollarSign} />Salary: {salary}</span></p>
                    </div>
                    <div>
                        <button onClick={() => handleJobDetails(id)} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF]
                        mx-auto py-2 px-3 text-white font-bold text-lg rounded-lg'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;
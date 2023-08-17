/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCart from '../JobCart/JobCart';

const FeaturedJob = () => {
    const jobs=useLoaderData();
    console.log(jobs);

    return (
        <div  className='mt-20'>
            <div className='text-center'>
                <h2 className='font-bold text-4xl'>Featured Jobs</h2>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur. Eaque distinctio labore pariatur ad.</p>
            </div>
    
            <div className='md:grid grid-cols-2 gap-4 m-8'>
                {
                    jobs.map(job=><JobCart key={job.id} job={job}></JobCart>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;
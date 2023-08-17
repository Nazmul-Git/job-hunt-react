/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const JobCart = ({ job }) => {
    const { id, img, title, coName, base, time, coLocation, salary } = job
    return (
        <div className=' bg-stone-100 rounded-md p-4 shadow-md shadow-slate-300 relative'>
            <img className='h-28 w-48 m-8' src={img} alt="" />
            <div className='ml-6 '>
                <p className='font-extrabold text-2xl'>{title}</p>
                <p className='font-bold'>{coName}</p>
                <div>
                    <div className='flex justify-between mt-4 text-xl font-semibold'>
                        <p>{base}</p>
                        <p>{time}</p>
                    </div>
                    <div className='flex justify-between gap-8 mb-20'>
                        <p>{coLocation}</p>
                        <p>Salary : {salary}</p>
                    </div>
                </div>

                <div className='bg-blue-400 p-3 rounded-md mt-4 text-2xl font-bold w-48 absolute bottom-4'>
                    <Link to={`/statistics/${id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCart;
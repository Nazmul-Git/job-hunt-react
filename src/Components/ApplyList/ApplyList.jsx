/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ApplyList = ({ d }) => {
    const { img, title, coName, base, time, coLocation, salary } = d;
    return (
        <div className='flex justify-between ml-48 mr-48 mt-8 bg-slate-300 p-4 items-center shadow-md shadow-gray-800 rounded-md'>
            <div className='flex gap-10 items-center'>
                <img className='h-28 w-36' src={img} alt={title} />
                <div>
                    <p className='text-2xl font-serif font-bold'>{title}</p>
                    <p className='font-semibold'>{coName}</p>
                    <div className='flex gap-8'>
                        <p>{base}</p>
                        <p>{time}</p>
                    </div>
                    <p>{coLocation}</p>
                    <p className='font-semibold'>{salary}</p>
                </div>
            </div>

            <div>
                <Link ><button className=' bg-blue-400 hover:bg-blue-600 p-4 rounded-md font-bold'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ApplyList;
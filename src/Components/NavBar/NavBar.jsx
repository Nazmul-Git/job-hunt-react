/* eslint-disable no-unused-vars */
import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavBar = () => {
    return (
        <nav className='md:flex justify-between gap-4 p-6 font-serif font-bold ml-48 mr-48 mt-20 bg-stone-100 shadow-lg rounded-sm sticky z-50 top-0 shadow-gray-100 items-center'>
            <ActiveLink to="/job-hunt"><p>J<span className='text-red-500'>o</span>B - <span className='text-orange-600'>H</span>un<span className='text-green-700'>T</span></p></ActiveLink>
            <div className='flex gap-8 font-semibold text-sm underline'>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
            </div>
            <ActiveLink to="/start-applying" ><button className='bg-blue-400 hover:bg-blue-500 font-bold p-4 rounded-md'>Start Applying</button></ActiveLink>
        </nav>
    );
};

export default NavBar;
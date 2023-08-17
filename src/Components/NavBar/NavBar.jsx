/* eslint-disable no-unused-vars */
import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavBar = () => {
    return (
        <nav className='md:flex justify-between gap-4 p-6 font-serif font-bold ml-44 mr-44 mt-20'>
            <ActiveLink to="/job-hunt">JOB-Hunt</ActiveLink>
            <div className='flex gap-8 font-semibold text-sm underline'>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
            </div>
            <ActiveLink to="/start-applying" >Start Applying</ActiveLink>
        </nav>
    );
};

export default NavBar;
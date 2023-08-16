/* eslint-disable no-unused-vars */
import React from 'react';
import sunny from '../../assets/sunny.jpeg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid grid-cols-2 p-6 items-center'>
            <div>
                <p className='font-bold text-4xl'>
                    Lets touch your <span className='text-blue-400'>Dream Job</span>
                </p>
                <p className='mt-8'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magni explicabo odio sequi vel est eius? Minima odio, optio vero eligendi assumenda, facilis eum quae vitae magnam officiis, ullam necessitatibus?
                </p>
                <p className='bg-blue-400 font-bold w-28 p-3 rounded-md text-center mt-4'>
                    <Link to=''>Get Start</Link>
                </p>
            </div>

            <div>
                <img src={sunny} alt="" />
            </div>
        </div>
    );
};

export default Header;
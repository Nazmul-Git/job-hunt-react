/* eslint-disable no-unused-vars */
import React from 'react';
import accounts from '../../../Icons/accounts 1.png'
import business from '../../../Icons/business 1.png'
import social from '../../../Icons/social-media 1.png'
import chip from '../../../Icons/chip 1.png'


const Category = () => {
    return (
        <div className='text-center mt-8'>
            <p className='text-3xl font-bold'>Job Category List</p>
            <p>Lorem ipsum dolor sit amet consectetur. Aut iste possimus veritatis, quam harummet at qui in!</p>
            <div className='flex justify-center gap-8 mt-6'>
                <div className=' bg-gray-200 rounded-md p-4 font-semibold text-sm'>
                    <img src={accounts} alt="" />
                    <p>Account & Finance</p>
                    <p>120+ job available</p>
                </div>
                <div className=' bg-gray-200 rounded-md p-4 font-semibold text-sm'>
                    <img src={business} alt="" />
                    <p>Creative Design</p>
                    <p>150+ job available</p>
                </div>
                <div className=' bg-gray-200 rounded-md p-4 font-semibold text-sm'>
                    <img src={social} alt="" />
                    <p>Marketing & Sales</p>
                    <p>200+ job available</p>
                </div>
                <div className=' bg-gray-200 rounded-md p-4 font-semibold text-sm'>
                    <img src={chip} alt="" />
                    <p>Engineering Job</p>
                    <p>370+ job available</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
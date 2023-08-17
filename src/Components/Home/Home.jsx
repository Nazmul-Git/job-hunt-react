/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Category from '../Category/Category';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <div className='ml-48 mr-48 mt-16 shadow-lg shadow-gray-300'>
            <Header></Header>
            <Category></Category>
            <FeaturedJob></FeaturedJob>
            
        </div>
    );
};

export default Home;
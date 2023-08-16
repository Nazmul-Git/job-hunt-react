/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='ml-48 mr-48 mt-16 shadow-lg shadow-gray-900'>
            <NavBar></NavBar>
            <Header></Header>
            <p>home</p>
        </div>
    );
};

export default Home;
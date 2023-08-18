/* eslint-disable no-unused-vars */
import React from 'react';
import { getShoppingCart } from '../Utilities/Utilities';
import ApplyList from '../ApplyList/ApplyList';

const DashBoard = () => {
    const database=getShoppingCart();
    return (
        <div>
            {
               database.map(d=> <ApplyList key={d.id} d={d}></ApplyList>)
            }
        </div>
    );
};

export default DashBoard;
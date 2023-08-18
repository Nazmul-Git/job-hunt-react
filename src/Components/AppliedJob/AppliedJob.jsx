/* eslint-disable no-unused-vars */
import {  useLoaderData, useParams } from 'react-router-dom';
import { addToDb, getShoppingCart} from '../Utilities/Utilities';


const AppliedJob = () => {
    
    const {ids}=useParams();
    const data = useLoaderData();
    // console.log(data);

    const get = data.find(sd => sd.id == ids);
    addToDb(get);

    const result = getShoppingCart();
    console.log(result);
    
    return (
        <div>
            {

            }
        </div>
    );
};

export default AppliedJob;
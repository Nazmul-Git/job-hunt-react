/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from 'react-router-dom';
import img1 from '../../../images/Vector.png'

const JobDetails = () => {

    const { jobId } = useParams();
    const data = useLoaderData();

    const get = data.find(sd => sd.id == jobId)
   
    return (
        <div>
            <h2 className='text-center font-bold text-4xl mt-20'>Job Details</h2>
            <div className='md:grid grid-cols-2 gap-72 m-48'>
                <div className=' font-serif grid grid-cols-1 gap-4'>
                    <p><span className='font-bold text-xl'>Job Descriptions :</span> {get.jobDescription}</p>
                    <p><span className='font-bold text-xl'>Job Responsibilities :</span> {get.jobResponsibility}</p>
                    <p><span className='font-bold text-xl'>Educational Requirement :</span>{get.educationalReq}</p>
                    <p><span className='font-bold text-xl'>Experience :</span> {get.experience}</p>
                    <img className='mt-10' src={img1} alt="" />
                </div>

                <div className=' bg-slate-200 p-16 font-semibold grid grid-cols-1 relative rounded-md'>
                    <p className='font-bold text-xl text-center'>Job Details</p>
                    <p><span className='font-bold'>Salary :</span> {get.salary}</p>
                    <p><span className='font-bold'>Job Title :</span> {get.title}</p>
                    <p><span className='font-bold'>Phone :</span> 01706256105</p>
                    <p><span className='font-bold'>Email :</span> imfo.@gmail.com</p>
                    <p><span className='font-bold'>Address :</span> {get.coLocation}</p>
                    <div className='font-bold bg-blue-400 hover:bg-blue-500 text-2xl font-serif absolute bottom-0 p-2 text-center rounded-md w-full'>
                        <Link to={`/applied-jobs/${get.id}`}>Apply Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;
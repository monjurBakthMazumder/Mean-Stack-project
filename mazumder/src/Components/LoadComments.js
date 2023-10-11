import React from 'react';

const LoadComments = () => {
    return (
        <div className='my-5'>
            <h1 className='text-xl font-bold border border-primary p-1 rounded'>Total Comments: 01</h1>
            <div className='flex gap-5 border border-primary p-4 rounded-lg mt-5'>
                <img className='h-12 rounded-lg object-cover' src='https://th.bing.com/th/id/OIP.gvro6Imv-OSYl8AlAEUlSQHaJR?pid=ImgDet&rs=1'/>
                <div>
                    <h5 className='font-semibold'>Sheikh Mujibur Rahman</h5>
                    <p className=' text-gray-500'>You are next Prime minister in Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default LoadComments;
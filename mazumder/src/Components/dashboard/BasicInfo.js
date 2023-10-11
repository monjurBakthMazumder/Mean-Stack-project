import React from 'react';

const BasicInfo = () => {
    let timeOfDay;
    const date=new Date();
    const hours=date.getHours();
    if(hours<12){
        timeOfDay="Good Morning";
    }
    else if(hours=>12 && hours <18){
        timeOfDay="Good Afternoon";
    }
    else{
        timeOfDay="Good Night";
    }
    return (
        <div className=' mx-10 my-16'>
            <h1 className='text-primary font-bold text-5xl'>{timeOfDay}, Md Monjur Bakth Mazumder.</h1>
            <section className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12'>
                <div className='flex flex-col rounded-lg border border-primary px-5 py-8 text-center'>
                    <dd className='text-5xl font-extrabold text-primary '>13</dd>
                    <dt className='text-lg font-bold text-gray-500'>Total Blogs</dt>
                </div>
                <div className='flex flex-col rounded-lg border border-primary px-5 py-8 text-center'>
                    <dd className='text-5xl font-extrabold text-primary '>13</dd>
                    <dt className='text-lg font-bold text-gray-500'>Total Blogs</dt>
                </div>
                <div className='flex flex-col rounded-lg border border-primary px-5 py-8 text-center'>
                    <dd className='text-5xl font-extrabold text-primary '>13</dd>
                    <dt className='text-lg font-bold text-gray-500'>Total Blogs</dt>
                </div>
                <div className='flex flex-col rounded-lg border border-primary px-5 py-8 text-center'>
                    <dd className='text-5xl font-extrabold text-primary '>13</dd>
                    <dt className='text-lg font-bold text-gray-500'>Total Blogs</dt>
                </div>
                <div className='flex flex-col rounded-lg border border-primary px-5 py-8 text-center'>
                    <dd className='text-5xl font-extrabold text-primary '>13</dd>
                    <dt className='text-lg font-bold text-gray-500'>Total Blogs</dt>
                </div>
                <div className='flex flex-col rounded-lg border border-primary px-5 py-8 text-center'>
                    <dd className='text-5xl font-extrabold text-primary '>13</dd>
                    <dt className='text-lg font-bold text-gray-500'>Total Blogs</dt>
                </div>
            </section>
                    
        </div>
    );
};

export default BasicInfo;
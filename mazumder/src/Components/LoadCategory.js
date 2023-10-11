import React from 'react';

const LoadCategory = () => {
    return (
        <div className='w-48 hidden md:block border-2 border-primary rounded-lg p-3 m-5'>
            <h1 className='text-xl font-bold border-b-4 border-primary pb-1'>Categories</h1>
            <div>
                <p className='font-bold mt-3'>#javaScript</p>
                <p className='font-bold mt-3'>#Java</p>
                <p className='font-bold mt-3'>#HTML</p>
                <p className='font-bold mt-3'>#Python</p>
                <p className='font-bold mt-3'>#PHP</p>
                <p className='font-bold mt-3'>#Ruby</p>
            </div>
        </div>
        
    );  
};

export default LoadCategory;
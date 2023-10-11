import React from 'react';

const CommentForm = () => {
    return (
        <div>
            <form className='w-full p-8 space-y-6 rounded-lg shadow bg-gray-900 text-white'>
                <h1 className='text-3xl font-bold'>Comment</h1>
                <div className='mt-3'>
                <label className='ml-1'>Name</label>
                <input className='w-full p-2 rounded focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-25 bg-gray-800' type='text' placeholder='Your name' />
                </div>
                <div className='mt-3'>
                <label className='ml-1'>Email</label>
                <input className='w-full p-2 rounded focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-25 bg-gray-800' type='text' placeholder='Your email' />
                </div>
                <div className='mt-3'>
                <label className='ml-1'>Message</label>
                <textarea className='w-full p-2 rounded focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-25 bg-gray-800' type='text' placeholder='Message...' />
                </div>
                <input className='w-full bg-primary hover:bg-indigo-700 py-2 mt-3' type='submit' value='Send'/>
            </form>
        </div>
    );
};

export default CommentForm;
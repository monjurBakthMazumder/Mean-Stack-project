import React from 'react';
import Advertisement from './/Shared/Advertisement';
import LoadCategory from './LoadCategory';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';
const BlogDetails = () => {
    return (
        <div className='mx-3 mt-10'>
            <div className='flex'>
            <div className='text-center'>
                <h1 className='text-xl sm:text-3xl font-bold'>Acusantium quis paristur molestiae porro eius</h1>
                <p className='font-bold'>12 May 2023 <span className='text-primary'>Java, For Loop</span></p>
                <div className='flex justify-center my-8'>
                <img className='rounded md:h-96 ' src="https://th.bing.com/th/id/R.6aa49513b4d471bb0b090745fc53df46?rik=xSqrwUDjme65Ig&pid=ImgRaw&r=0" alt="Shoes" />
                </div>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Advertisement/>
            <div className=' text-start'>
            <CommentForm/>
            <LoadComments/>
            </div>
                
            </div>
            <div>
                <LoadCategory/>
            </div>
            </div>
        </div>
    );
};

export default BlogDetails;
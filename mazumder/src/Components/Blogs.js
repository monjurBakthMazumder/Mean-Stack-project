import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import Advertisement from './Shared/Advertisement';

const Blogs = () => {
    return (
        <div className='mx-2'>
            <h1 className='text-center text-3xl m-5 font-bold '>For Engineers, Developers and Server Admins.</h1>
            <form className='flex justify-center mb-10'>
                <input className='input input-bordered' type='text' placeholder='Search....'/>
                <input type='submit' value='Search' className='btn btn-primary ml-1'/>
            </form>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="bg-secondary shadow-xl">
                <figure><img src="https://th.bing.com/th/id/R.6aa49513b4d471bb0b090745fc53df46?rik=xSqrwUDjme65Ig&pid=ImgRaw&r=0" alt="Shoes" /></figure>
                <div className="px-2 pb-5">
                    <p className='font-bold text-primary mt-3'>Java, For Loop</p>
                    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a Title</h2>
                    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 may 2023</p>
                    <p className='text-xl mt-1'>If a dog chews shoes whose shoes does he choose?</p>
                    <Link className='flex items-end text-xl hover:font-bold text-primary mt-3 hover:ease-in duration-300'>Continue Reading <FiArrowRight className='font-extrabold text-xl'/> </Link>
                </div>
            </div>
            <div className="bg-secondary shadow-xl">
                <figure><img src="https://th.bing.com/th/id/R.6aa49513b4d471bb0b090745fc53df46?rik=xSqrwUDjme65Ig&pid=ImgRaw&r=0" alt="Shoes" /></figure>
                <div className="px-2 pb-5">
                    <p className='font-bold text-primary mt-3'>Java, For Loop</p>
                    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a Title</h2>
                    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 may 2023</p>
                    <p className='text-xl mt-1'>If a dog chews shoes whose shoes does he choose?</p>
                    <Link className='flex items-end text-xl hover:font-bold text-primary mt-3 hover:ease-in duration-300'>Continue Reading <FiArrowRight className='font-extrabold text-xl'/> </Link>
                </div>
            </div>
            <div className="bg-secondary shadow-xl">
                <figure><img src="https://th.bing.com/th/id/R.6aa49513b4d471bb0b090745fc53df46?rik=xSqrwUDjme65Ig&pid=ImgRaw&r=0" alt="Shoes" /></figure>
                <div className="px-2 pb-5">
                    <p className='font-bold text-primary mt-3'>Java, For Loop</p>
                    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a Title</h2>
                    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 may 2023</p>
                    <p className='text-xl mt-1'>If a dog chews shoes whose shoes does he choose?</p>
                    <Link className='flex items-end text-xl hover:font-bold text-primary mt-3 hover:ease-in duration-300'>Continue Reading <FiArrowRight className='font-extrabold text-xl'/> </Link>
                </div>
            </div>
            <div className="bg-secondary shadow-xl">
                <figure><img src="https://th.bing.com/th/id/R.6aa49513b4d471bb0b090745fc53df46?rik=xSqrwUDjme65Ig&pid=ImgRaw&r=0" alt="Shoes" /></figure>
                <div className="px-2 pb-5">
                    <p className='font-bold text-primary mt-3'>Java, For Loop</p>
                    <h2 className="text-2xl font-bold hover:text-primary cursor-pointer my-2">This is a Title</h2>
                    <p className='text-xs'>By <span className='font-bold'>Al Mahfuz</span> , Published on 12 may 2023</p>
                    <p className='text-xl mt-1'>If a dog chews shoes whose shoes does he choose?</p>
                    <Link className='flex items-end text-xl hover:font-bold text-primary mt-3 hover:ease-in duration-300'>Continue Reading <FiArrowRight className='font-extrabold text-xl'/> </Link>
                </div>
            </div>
            </div>
           <div className='text-center m-10'>
           <button className='btn btn-primary w-64 btn-md'>Load More</button>
           </div>
           <Advertisement/>
        </div>
    );
};

export default Blogs;
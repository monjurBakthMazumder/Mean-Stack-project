import React from 'react';

import { Link } from 'react-router-dom';
import SingInWIthGoogle from './SingInWIthGoogle';
const Registration = () => {
    return (
        <div className='py-10 '>
            <div className='flex rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border border-primary border-opacity-30'>
                <div className='hidden lg:block bg-cover p-8 lg:w-1/2' style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.3ntdyfUdtcnTTcetut_IGAHaLH?pid=ImgDet&rs=1')"}}>
                </div>
                <div className='p-8 lg:w-1/2 '>
                    <h1 className='text-primary font-bold text-3xl text-center'>Mazumder Blog</h1>
                    <SingInWIthGoogle/>
                    <div className="divider">OR</div>
                    <form>
                        <div className='mt-4'>
                            <label className='text-gray-700 text-sm font-bold mb-2 block'>Name</label>
                            <input className='bg-gray-200 text-primary focus:outline-primary border border-gray-300 rounded py-2 px-4 w-full' type='text' placeholder='Type your Name'/>
                        </div>
                        <div className='mt-4'>
                            <label className='text-gray-700 text-sm font-bold mb-2 block'>Email Address</label>
                            <input className='bg-gray-200 text-primary focus:outline-primary border border-gray-300 rounded py-2 px-4 w-full' type='text' placeholder='Type your Email address'/>
                        </div>
                        <div className='mt-4'>
                            <label className='text-gray-700 text-sm font-bold mb-2 block'>Password</label>
                            <input className='bg-gray-200 text-primary focus:outline-primary border border-gray-300 rounded py-2 px-4 w-full' type='text' placeholder='Type your Password'/>
                        </div>
                        <div className='flex item-center gap-3 mt-5'> 
                            <input className='cursor-pointer' type='checkbox'/>
                            <p>I agree with <span className='text-red-600 underline'>terms and condition.</span></p>
                        </div>
                        <input className='bg-primary font-bold text-white w-full py-2 px-4 rounded cursor-pointer mt-2' type='submit' value='Register' />
                    </form>
                    <p className='text-gray-500 text-xs mt-4 text-center'>Already have an account?<Link to='/login' className='underline text-primary font-bold'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
    const [value, setValue] = useState('');

    return (
        <div className='md:w-1/2 mx-auto
        '>
            <div className='my-10 sm:my-24 border-2 border-primary rounded-lg p-4'>
                <h1 className='font-bold mb-1 text-lg'>Add a Blog</h1>
                <form>
                    <div>
                        <label className='text-sm text-gray-600'>Blog title</label>
                        <input  className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'/>
                    </div>
                    <div>
                        <label className='text-sm text-gray-600'>Author Name</label>
                        <input  className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'/>
                    </div>
                    <div>
                        <label className='text-sm text-gray-600'>Author Email</label>
                        <input  className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'/>
                    </div>
                    <div>
                        <label className='text-sm text-gray-600'>Keywords</label>
                        <input  className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'/>
                    </div>
                    <div>
                    <label className='text-sm text-gray-600'>Description</label>
                    <ReactQuill className='h-32 mb-5' theme="snow" value={value} onChange={setValue} />
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <label className='text-sm text-gray-600'>Select a Category</label>
                    <br/>
                    <select className='select select-border w-full mt-2 border border-gray-300'>
                        <option selected className='font-bold'>Java</option>
                        <option className='font-bold'>React</option>
                        <option className='font-bold'>Java</option>
                        <option className='font-bold'>Java</option>
                        <option className='font-bold'>Java</option>
                    </select>
                    </div>
                    <br/>
                    <div>
                    <label className='text-sm text-gray-600'>Select status</label>
                    <br/>
                    <select className='select select-border w-full mt-2 border border-gray-300'>
                        <option selected className='font-bold'>Active</option>
                        <option className='font-bold'>Active</option>
                        <option className='font-bold'>Active</option>
                        <option className='font-bold'>Active</option>
                        <option className='font-bold'>Active</option>
                    </select>
                    </div>
                    <div>
                    <label className='text-sm text-gray-600'>Select status</label>
                    <input type='file' className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'/>
                    </div>
                    <input className='w-full mt-2 text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' type='submit' value='submit'/>
                </form>
                <p className='text-xl text-gray-500 mt-5'>This is very important for your blog. so,be careful.</p>
            </div>
        </div>
    );
};

export default AddBlog;
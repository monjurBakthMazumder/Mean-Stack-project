import React from 'react';

import { AiOutlineEye } from "react-icons/ai";
const ContactInfo = () => {
    return (
        <div>
        <div className='text-center my-5'>
            <span className='text-white text-3xl font-bold bg-primary rounder p-2'>Total Contact: 6</span>
        </div>
        <div className='text-center'>
        <input type="text " placeholder="Type here" className="input w-full max-w-xs input-primary" />
        </div>
        <div className="overflow-x-auto">
<table className="table w-full my-5">
{/* head */}
<thead>
  <tr>
    <th>No</th>
    <th>Email</th>
    <th>Message</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Hi</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <AiOutlineEye/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Hi</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <AiOutlineEye/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Hi</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <AiOutlineEye/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Hi</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <AiOutlineEye/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Hi</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <AiOutlineEye/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Hi</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <AiOutlineEye/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Hi</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <AiOutlineEye/>
        </div>
    </td>
  </tr>


</tbody>
</table>
</div>
    </div>
    );
};

export default ContactInfo;
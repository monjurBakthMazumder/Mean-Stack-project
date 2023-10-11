import React from 'react';
import { BiCalendarEdit } from "react-icons/bi";
const Users = () => {
    return (
        <div>
        <div className='text-center my-5'>
            <span className='text-white text-3xl font-bold bg-primary rounder p-2'>Total Users: 6</span>
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
    <th>Role</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Admin</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <BiCalendarEdit/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Admin</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <BiCalendarEdit/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Admin</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <BiCalendarEdit/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Admin</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <BiCalendarEdit/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Admin</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <BiCalendarEdit/>
        </div>
    </td>
  </tr>
  <tr>
    <th>1</th>
    <td>md.monjur2001@gmail.com</td>
    <td>Admin</td>
    <td>
        <div className='flex gap-3 text-2xl'>
        <BiCalendarEdit/>
        </div>
    </td>
  </tr>

</tbody>
</table>
</div>
    </div>
    );
};

export default Users;
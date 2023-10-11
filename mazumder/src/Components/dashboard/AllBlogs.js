import React from 'react';
import { BiCalendarEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
const AllBlogs = () => {
    return (
        <div>
            <div className='text-center my-5'>
                <span className='text-white text-3xl font-bold bg-primary rounder p-2'>Total Blogs: 13</span>
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
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td >
        <div className="avatar border-2 border-primary rounded">
  <div className="w-12 mask mask-squircle">
    <img src="https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-1-1.jpg" />
  </div>
</div>
        </td>
        <td>Iure voluptatem occaecat</td>
        <td> Java <br/> Author: Al Mahfuz</td>
        <td>available</td>
        <td>
            <div className='flex gap-3 text-2xl'>
            <BiCalendarEdit/> <AiOutlineDelete/>
            </div>
        </td>
      </tr>
      <tr>
        <th>1</th>
        <td >
        <div className="avatar border-2 border-primary rounded">
  <div className="w-12 mask mask-squircle">
    <img src="https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-1-1.jpg" />
  </div>
</div>
        </td>
        <td>Iure voluptatem occaecat</td>
        <td> Java <br/> Author: Al Mahfuz</td>
        <td>available</td>
        <td>
            <div className='flex gap-3 text-2xl'>
            <BiCalendarEdit/> <AiOutlineDelete/>
            </div>
        </td>
      </tr>
      <tr>
        <th>1</th>
        <td >
        <div className="avatar border-2 border-primary rounded">
  <div className="w-12 mask mask-squircle">
    <img src="https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-1-1.jpg" />
  </div>
</div>
        </td>
        <td>Iure voluptatem occaecat</td>
        <td> Java <br/> Author: Al Mahfuz</td>
        <td>available</td>
        <td>
            <div className='flex gap-3 text-2xl'>
            <BiCalendarEdit/> <AiOutlineDelete/>
            </div>
        </td>
      </tr>
      <tr>
        <th>1</th>
        <td >
        <div className="avatar border-2 border-primary rounded">
  <div className="w-12 mask mask-squircle">
    <img src="https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-1-1.jpg" />
  </div>
</div>
        </td>
        <td>Iure voluptatem occaecat</td>
        <td> Java <br/> Author: Al Mahfuz</td>
        <td>available</td>
        <td>
            <div className='flex gap-3 text-2xl'>
            <BiCalendarEdit/> <AiOutlineDelete/>
            </div>
        </td>
      </tr>
      <tr>
        <th>1</th>
        <td >
        <div className="avatar border-2 border-primary rounded">
  <div className="w-12 mask mask-squircle">
    <img src="https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-1-1.jpg" />
  </div>
</div>
        </td>
        <td>Iure voluptatem occaecat</td>
        <td> Java <br/> Author: Al Mahfuz</td>
        <td>available</td>
        <td>
            <div className='flex gap-3 text-2xl'>
            <BiCalendarEdit/> <AiOutlineDelete/>
            </div>
        </td>
      </tr>
      <tr>
        <th>1</th>
        <td >
        <div className="avatar border-2 border-primary rounded">
  <div className="w-12 mask mask-squircle">
    <img src="https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-1-1.jpg" />
  </div>
</div>
        </td>
        <td>Iure voluptatem occaecat</td>
        <td> Java <br/> Author: Al Mahfuz</td>
        <td>available</td>
        <td>
            <div className='flex gap-3 text-2xl'>
            <BiCalendarEdit/> <AiOutlineDelete/>
            </div>
        </td>
      </tr>
      <tr>
        <th>1</th>
        <td >
        <div className="avatar border-2 border-primary rounded">
  <div className="w-12 mask mask-squircle">
    <img src="https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-1-1.jpg" />
  </div>
</div>
        </td>
        <td>Iure voluptatem occaecat</td>
        <td> Java <br/> Author: Al Mahfuz</td>
        <td>available</td>
        <td>
            <div className='flex gap-3 text-2xl'>
            <BiCalendarEdit/> <AiOutlineDelete/>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBlogs;
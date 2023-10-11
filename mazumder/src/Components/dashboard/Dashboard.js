import React from 'react';
import { AiOutlineAlignRight, AiOutlineAppstore } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <div className='text-end'>

    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><AiOutlineAlignRight className='text-2xl font-extrabold rotate-180'/></label>
   </div>
    <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 bg-gray-900 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='text-white bg-gray-500 mt-2'><NavLink to="Basic-info"><AiOutlineAppstore className='text-xl'/> Basic info</NavLink></li>
      <li className='text-white bg-gray-500 mt-2'><NavLink to="add-blog"><AiOutlineAppstore className='text-xl'/> Add Blog</NavLink></li>
      <li className='text-white bg-gray-500 mt-2'><NavLink to="blogs"><AiOutlineAppstore className='text-xl'/> Blogs</NavLink></li>
      <li className='text-white bg-gray-500 mt-2'><NavLink to="waiting-blog"><AiOutlineAppstore className='text-xl'/> Waiting Blogs</NavLink></li>
      <li className='text-white bg-gray-500 mt-2'><NavLink to="category"><AiOutlineAppstore className='text-xl'/> Category</NavLink></li>
      <li className='text-white bg-gray-500 mt-2'><NavLink to="User"><AiOutlineAppstore className='text-xl'/> User</NavLink></li>
      <li className='text-white bg-gray-500 mt-2'><NavLink to="Contact-info"><AiOutlineAppstore className='text-xl'/> Messages</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
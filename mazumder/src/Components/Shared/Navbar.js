import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    let navItems=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/authors">Authors</NavLink></li>
    <li><NavLink to="/faq">FAQ</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-white border-b-4 border-primary">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white  rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="font-extrabold text-primary text-4xl">MAZUMDER Blog</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="bg-secondary px-3 py-1 font-bold cursor-pointer hover:text-primary">Login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;
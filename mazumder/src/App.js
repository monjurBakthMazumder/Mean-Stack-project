import React from 'react';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Shared/Navbar';
import Blogs from './Components/Blogs';
import Footer from './Components/Shared/Footer';
import Authors from './Components/Authors';
import { Route, Routes } from 'react-router-dom';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Dashboard from './Components/dashboard/Dashboard';
import BasicInfo from './Components/dashboard/BasicInfo';
import AddBlog from './Components/dashboard/AddBlog'; 
import AllBlogs from './Components/dashboard/AllBlogs'; 
import WaitingBlog from './Components/dashboard/WaitingBlog'; 
import Category from './Components/dashboard/Category';
import Users from './Components/dashboard/Users';
import ContactInfo from './Components/dashboard/ContactInfo';
import BlogDetails from './Components/BlogDetails';
import Login from './Components/Aythentication/Login';
import Registration from './Components/Aythentication/Registration';
import UpdateCategory from './Components/dashboard/UpdateCategory';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Blogs/> } />
        <Route path='/blog-details/:id' element={ <BlogDetails/> } />
        <Route path='/authors' element={ <Authors/> } />
        <Route path='/faq' element={ <Faq/> } />
        <Route path='/contact' element={ <Contact/> } />
        {/* Authertication */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/category-update/:id' element={<UpdateCategory/>}/>
        <Route path='/dashboard' element={ <Dashboard/> } >
          <Route index element={ <BasicInfo/> } />
          <Route path='Basic-info' element={ <BasicInfo/> } />
          <Route path='add-blog' element={ <AddBlog/> } />
          <Route path='blogs' element={ <AllBlogs/> } />
          <Route path='waiting-blog' element={ <WaitingBlog/> } />
          <Route path='category' element={ <Category/> } />
          <Route path='User' element={ <Users/> } />
          <Route path='Contact-info' element={ <ContactInfo/> } />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
};

export default App;
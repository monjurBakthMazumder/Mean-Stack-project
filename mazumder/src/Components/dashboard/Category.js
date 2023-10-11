import React, { useEffect, useState } from 'react';
import { BiCalendarEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Category = () => {
  const[categories,setCategories]=useState([]);
  console.log(categories)
  const[errorMessage,setErrorMessage]=useState("");
  const loadCategories=async()=>{
    try {
      const response=await axios.get("http://localhost:5000/category");
      console.log(response.data);
      setCategories(response.data.readData);
    } catch (error) {
      setErrorMessage("Something is wrong. please try again")
      console.log(error)
    }
  }
  useEffect(()=>{
    loadCategories()
  },[])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    axios.post('http://localhost:5000/category', data)
    .then( (response)=> {
      if(response.status===201){
        toast.success('Successfully submitted!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
        toast.error('Not submitted, try again.', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      
    })
    .catch( (error)=> {
      console.log(error);
    });
  }
  const handleCategoryDelete=async(id)=>{
    const proceed=window.confirm("Are you sure? you want to delete? ");
    if (proceed){
      await axios.delete(`http://localhost:5000/category/${id}`)
      .then(response=>{
        if(response.data.blog.deletedCount>0)
        {
          const remaining=categories.filter(item=>item._id !==id);
          setCategories(remaining)
        }
      })
      console.log(id)
    }
  }
    return (
      <div className='mx-2 sm:mx-10 mt-10' >
            
            <section className='border-2 border-primary p-2 rounded-lg'>
                <h1 className='font-bold text-3xl'>Create a Category </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-gray-600 text-sm'>Category Name</label>
                    <input className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("name", { required: true })}/>
                    <p className='mb-3'>  {errors.name && <span className='text-rose-700'>This field is required</span>}</p>
                    <input className='btn btn-primary sm:btn-md btn-sm font-bold' type='Submit' value='Submit' />
                </form>
            </section>
            <div className='text-center m-10'>
            <span className='text-white text-3xl font-bold bg-primary rounder p-2 rounded'>Total Categories: {categories.length}</span><br/><p className='my-2'>{errorMessage}</p>
            </div>
            <section>
            <table className="table w-full my-5">
{/* head */}
<thead>
  <tr>
    <th>No</th>
    <th className='text-center'>Category</th>
    <th className='text-end'>Action</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {categories.map((category,index)=>
       <tr>
         <th>{index+1}</th>
 <td className='text-center'>{category.name}</td>
 <td><div className='flex gap-3 text-2xl justify-end'>
  <Link to={`/category-update/${category._id}`}><BiCalendarEdit/></Link>
  <button onClick={()=>handleCategoryDelete(category._id)}><AiOutlineDelete/></button>

 
 </div></td>
       </tr>
       
       )}

</tbody>
</table>
            </section>
        </div>
    );
};

export default Category;
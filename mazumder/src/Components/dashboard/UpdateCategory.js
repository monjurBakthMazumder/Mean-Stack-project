import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCategory = () => {
  const[categories,setCategories]=useState({});
  console.log(categories)
  const[errorMessage,setErrorMessage]=useState("");
  const {id}=useParams();
  const loadCategories=async()=>{
    try {
      const response=await axios.get(`http://localhost:5000/category/${id}`);
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
    axios.put(`http://localhost:5000/category/${id}`, data)
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
    return (
        <div>
            <section className='border-2 border-primary p-2 rounded-lg m-10'>
                <h1 className='font-bold text-3xl'>Update Category </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-gray-600 text-sm'>Category Name</label>
                    <input defaultValue={categories.name} className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:right-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 mt-1 mb-3 text-base'{...register("name", { required: true })}/>
                    <p className='mb-3'>  {errors.name && <span className='text-rose-700'>This field is required</span>}</p>
                    <input className='btn btn-primary sm:btn-md btn-sm font-bold' type='Submit' value='Submit' />
                </form>
            </section>
        </div>
    );
};

export default UpdateCategory;
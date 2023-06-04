import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Details = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful }
} = useForm()

const onSubmit = data => console.log(data); 

useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', phone: '', adress_line_1:'', first_name:'', last_name:'' });
    }
  }, [formState, reset]);
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label className='block'>Email</label>
                    <input type="text" className='border' {...register("email", {required: true})}/>
                </div>
                <div className=" my-2 ">
                    <label htmlFor="" className='block'>First Name</label>
                    <input type="text" name="" id="last"  className='border' {...register("first_name", {required: true})}/>
                    
                </div>

                <div className=" my-2 ">
                    <label htmlFor="" className='block '>Last Name</label>
                    <input type="text" name="" id="last"  className='border'{...register("last_name", {required: true})}/>
                </div>

                <div className=" my-2">
                    <label htmlFor="">Province</label>
                        <select {...register("Province")} className="bg-white w-full border" {...register("province", {required: false})} >
                          <option value="gauteng" >Gauteng</option>
                        </select>

                        
                </div>

                <div className=" my-2 ">
                    <label htmlFor="" className='block '>Adress</label>
                    <input type="text"  className='border ' {...register("adress_line_1", {required: true})}/>
                </div>

                <div className=" my-2 ">
                    <label htmlFor="" className='block '>Apartment, suite, etc</label>
                    <input type="text"  className='border ' {...register("adress_line_2", {required: false})}/>
                </div>

                <div className=" my-2 ">
                    <label htmlFor="" className='block ' >City</label>
                    <input type="text"  className='border '{...register("city", {required: true})}/>
                </div>

                <div className=" my-2 ">
                    <label htmlFor="" className='block '>Postal code</label>
                    <input type="text"  className='border ' {...register("postal_code", {required: true})}/>
                </div>

                <div className=" my-2 ">
                    <label htmlFor="" className='block '>Phone</label>
                    <input type="text"  className='border '{...register("phone", {required: true})}/>
                </div>



                <div className="py-4">
                     <button className='bg-sky-500 text-white w-4/5' type='submit'>Register</button>
                </div>
            </form>


        <Outlet />
    </div>

  )
}

export default Details
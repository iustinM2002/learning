import React,{useState} from 'react';
import { NextPage } from 'next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// types 
import {dataContact,FormValues } from 'types';
import Link from 'next/link';
import Router from 'next/router';


// styles
const inputStyle = `w-[70%] mx-auto text-black py-[0.5rem] outline-none`;
const labelStyle = `text-[1.2rem] py-[1rem] px-[2rem]`;
const schema = yup.object().shape({
    email:yup.string().required().email(),
    password:yup.string().required().min(6)
});
const registerContact = async (data:dataContact) =>{
    const response = await fetch('/api/register',{
        method: 'POST',
        body:JSON.stringify(data)
    });
   
    if(!response.ok){
        throw Error(response.statusText)
    }
    return await response.json();
}

const SignUpBody:NextPage<{contacts:any}> = ({contacts}):JSX.Element => {
    
    const [passwordView,setPasswordView] = useState<string>('show');
    // useform deconstruct
    const  {register,handleSubmit,formState:{errors}} = useForm<FormValues>({
        resolver: yupResolver(schema)
    });
    // submit handler
    const onSubmit = async (data:dataContact) =>{
        Router.push('/login')
     await registerContact(data);
    }
    const showHidePassHandler = (e:any) : void =>{
        e.preventDefault()
        if(passwordView === 'show'){
            setPasswordView('hide')
        }else{
            setPasswordView('show')
        }
    }
    return (
    <div className='w-full min-h-[100vh] flex items-center justify-center'>
        <form action="" className='flex flex-col bg-[#000000] text-white w-[25%] mx-auto min-h-[45vh] rounded-[0.3rem] lg:w-full lg:min-h-[100vh]' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-[1.5rem] px-[2rem] pt-[1rem] md:text-[1.2rem]'>Sign Up</h2>
            <label className={labelStyle} htmlFor="email">Email:</label>
            <input autoComplete='off' className={inputStyle} type="email" id='email' {...register('email')} />
            {errors.email? <p className='px-[2rem]'>Please use a valid email.</p> : ''}
            <label className={labelStyle} htmlFor="password">Password:</label>
            <div className="relative w-[70%] mx-auto flex">
            <input autoComplete='off' className='w-full text-black py-[0.5rem] outline-none auto' type={passwordView === 'show' ? 'password' : 'text'} id='password' {...register('password')} />
            <div  className='text-[#ffffff] bg-[#535252] w-[20%] flex justify-center items-center cursor-pointer  ' onClick={showHidePassHandler}>{passwordView.toLocaleUpperCase()}</div>
            </div>
            {errors.password? <p className='px-[2rem]'>Please use a longer password.</p> : ''}
            <div className="min-h-[15vh] flex items-end justify-center">
                <button type='submit' className='border-[1px] border-white px-[1rem] py-[0.5rem] rounded-[0.3rem] my-[1rem]'>Sign up</button>
            </div>
            <div className="px-[2rem] pb-[1rem]">
                <p>If you have an accound please <span className='underline'><Link href='/login'>Sign in</Link></span></p>
            </div>
        </form>
    </div>
  )
}

export default SignUpBody
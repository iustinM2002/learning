import React,{useState} from 'react';
import { NextPage } from 'next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// prisma

// types 
import { onSubmitData,dataContact,FormValues } from 'types';
import Link from 'next/link';
import Router from 'next/router';

// styles
const inputStyle = `w-[70%] mx-auto text-black py-[0.5rem] `;
const labelStyle = `text-[1.2rem] py-[1rem] px-[2rem]`;
const schema = yup.object().shape({
    email: yup.string().required().email('Must be a valid email'),
    password : yup.string().required()
})


const LoginBody:NextPage<{contacts:any}> = ({contacts}):JSX.Element => {
    const [passwordView,setPasswordView] = useState<string>('show');
    const [errorForm,setFormError]= useState<string>('')
    // useform deconstruct
    const  {register,handleSubmit,formState:{errors}} = useForm<FormValues>({
        resolver: yupResolver(schema)
    });
    // submit handler
    const onSubmit = (data:dataContact) =>{
       contacts.forEach((contact:dataContact) =>{
           if(contact.email === data.email && contact.password === data.password){
               sessionStorage.setItem('logged','true');
               Router.push('/lobby');
           }
           setFormError('Email or password are incorrect, please try again.')
       })
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
            <h2 className='text-[1.5rem] px-[2rem] pt-[1rem] md:text-[1.2rem]'>Login</h2>
            <label className={labelStyle} htmlFor="email">Email:</label>
            <input autoComplete='off' className={inputStyle} type="email" id='email' {...register('email')} />
            <div className='w-[50%] mx-auto text-[0.9rem]'>{errors.email? <p>Must be a valid email</p> : ''}</div>
            <label className={labelStyle} htmlFor="password">Password:</label>
            <div className="relative w-[70%] mx-auto flex">
            <input autoComplete='off' className='w-full text-black py-[0.5rem] outline-none auto' type={passwordView === 'show' ? 'password' : 'text'} id='password' {...register('password')} />
            <div  className='text-[#ffffff] bg-[#535252] w-[20%] flex justify-center items-center  cursor-pointer ' onClick={showHidePassHandler}>{passwordView.toLocaleUpperCase()}</div>
            </div>
            <div className="min-h-[15vh] flex items-end justify-center">
                <button type='submit' className='border-[1px] border-white px-[1rem] py-[0.5rem] rounded-[0.3rem] my-[1rem]'>Sign in</button>
            </div>
            <div className="px-[2rem] pb-[1rem] ">
                <p>If you don't have an accound please <span className='underline'><Link href='/sign_up'>Sign Up</Link></span></p>
            </div>
            {errorForm.length > 1 ? <p className=' px-[2rem] py-[1rem]'>{errorForm}</p> : ""}
        </form>
    </div>
  )
}

export default LoginBody
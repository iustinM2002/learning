import React,{useContext} from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ApiContext } from 'contexts/ApiContext';
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { show } from '../util/Transitions';
import { lobbyElement } from 'types';
// styles
const inputStyle = `mx-[2em] my-[0.6rem]  p-[0.5rem] text-black font-poppins placeholder:text-black`;

const schema = yup.object().shape({
    title: yup.string().required(),
    description:yup.string().required(),
    link:yup.string().required(),
    tehn:yup.string().required()
});

interface FormValues extends Record<string,any>{
   title:string,
   description:string,
   image:string,
   link:string,
   tehn:string
}
const LobbyAddProject:NextPage<{setActiveAdd:React.Dispatch<React.SetStateAction<boolean>>}> = ({setActiveAdd}) => {
    const {refetch} = useContext(ApiContext);
    const tableInstance = useForm<FormValues>({
        resolver:yupResolver(schema)
    });
    
    const {register,handleSubmit} = tableInstance;

    const addProject = async (data:lobbyElement) =>{
        const response =   await fetch('/api/post_project',{
          method:"POST",
          body:JSON.stringify(data)
        })
        try{
          return await response.json()
        }catch{
            throw Error(response.statusText)
        }
      }

      const {mutate} = useMutation(addProject,{
        onSuccess:(data:lobbyElement) =>{ console.log(data)
        refetch()
        }
      });

      const onSubmit = (data:lobbyElement) =>{
        mutate(data);
        setActiveAdd(false)
    }   
  return (
    <motion.div variants={show} initial='hidden' animate='show' className='fixed w-full min-h-[100vh] bg-[#00000052] flex items-center justify-center top-0'>

            <form className='flex flex-col w-[30%] min-h-[50vh] bg-[#666666] rounded-[0.5rem] lg:w-[70%] md:w-full relative' onSubmit={handleSubmit(onSubmit)}>
            <div className="absolute top-[0.5rem] right-[1rem] cursor-pointer bg-white hover:bg-[#ffffff48] px-[0.5rem] py-[0.2rem] transition-all rounded-full text-black flex justify-center items-center " onClick={() => setActiveAdd(false)} ><FontAwesomeIcon className='text-[1.5rem]' icon={faXmark}/></div>
                <h2 className='text-[1.rem] px-[2rem] py-[1rem]'>Add project</h2>
                <input className={inputStyle} type="text" placeholder='Title' id='title' {...register('title')} />
                <input className={inputStyle} type="text" placeholder='Description' id='description' {...register('description')}/>
                <input className={inputStyle} type="text" placeholder='Image Link' id='image' {...register('image')}/>
                <input className={inputStyle} type="text" placeholder='Link' id='link' {...register('link')} />
                <input className={inputStyle} type="text" placeholder='Tehnologies' id='tehn' {...register('tehn')}/>
                <div className="w-full flex justify-center my-[0.5rem]">
                    <button className='bg-black w-[100px] py-[0.5rem] px-[1rem] rounded-[0.5rem]'>Submit</button>
                </div>
            </form>
       
    </motion.div>
  )
}

export default LobbyAddProject
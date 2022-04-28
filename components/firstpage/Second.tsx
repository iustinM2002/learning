import React from 'react';
import Image from 'next/image';
import Organise from '../../img/organise.png';
import { motion } from 'framer-motion';
import { show,moveDiv } from '../util/Transitions';

const Second = () => {
  return (
    <motion.div className="w-full flex flex-wrap items-center justify-around min-h-[90vh] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] lg:flex-col text-white font-poppins">
        <motion.div  variants={show} whileInView="show" viewport={{ once: false }}  initial='hidden'  className="w-[450px] min-h-[100px] md:w-[200px] lg:order-2">
            <Image src={Organise} />
        </motion.div>
        <motion.div variants={moveDiv}   whileInView="show" viewport={{ once: false }}initial='hidden' className="flex flex-col md:items-center md:text-center md:px-[2rem]">
            <h3 className="text-[2rem]">Organised</h3>
            <p className="py-[2rem]">Here you will find games and movies in a well structured way, such that you can find very fast your wanted product. </p>
            
        </motion.div>

    </motion.div>
  )
}

export default Second
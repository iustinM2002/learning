import { NextPage } from "next"
import Image from "next/image"
import Books from '../../img/books.png';
import Link from "next/link";
import { motion } from "framer-motion";
import { show,moveDiv } from "../util/Transitions";
const First:NextPage = ():JSX.Element => {
  
  return (
    <div className="w-full flex flex-wrap items-center justify-around min-h-[90vh] bg-[#900C3E] lg:flex-col text-white font-poppins">
        <motion.div  variants={moveDiv} initial='hidden' animate="show" className="flex flex-col md:items-center md:text-center md:px-[2rem]">
            <h3 className="text-[2rem]">Library</h3>
            <p className="py-[2rem]">Discover best movies and games that you need to live a peaceful and better life.</p>
            <p>Please sign in or make an account to habe all the benefits that we offer.</p>
            <Link href='/login'><p className="border-white border-[1px] w-[15%] flex justify-center py-[0.3rem] rounded-[0.3rem] mt-[2rem] cursor-pointer">Sign In</p></Link>
        </motion.div>
        <motion.div variants={show} initial='hidden' animate="show" className="w-[450px] min-h-[100px] md:w-[200px]">
            <Image src={Books} />
        </motion.div>

    </div>
  )
}

export default First
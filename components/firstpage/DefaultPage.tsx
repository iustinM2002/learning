import { NextPage } from "next";
// import components
import First from "./First";
import Second from "./Second";
import PageNav from "../util/PageNav";
import Footer from "../util/Footer";
const DefaultPage:NextPage = ():JSX.Element => {
  return (
    <div className="w-full  bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins overflow-x-hidden">
        <PageNav/>
        <First/>
        <Second/>
        <Footer/>
    </div>
  )
}

export default DefaultPage
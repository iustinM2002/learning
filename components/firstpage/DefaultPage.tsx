import { NextPage } from "next";
// import components
import First from "./First";
import Second from "./Second";
import PageNav from "../util/PageNav";
import Footer from "../util/Footer";
const DefaultPage:NextPage = ():JSX.Element => {
  return (
    <div className="w-full bg-[#900C3E] text-white font-poppins overflow-x-hidden">
        <PageNav/>
        <First/>
        <Second/>
        <Footer/>
    </div>
  )
}

export default DefaultPage
import { NavLink, useNavigate } from "react-router-dom";

import Oval from "../assets/Oval.svg";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { useCurrentPath } from "../hooks/useCurrentPath";

function Footer() {
  const { currentSelectedOption } = useCurrentPath();
  const navigate = useNavigate();
  return (
    <footer
      className={`relative w-full bg-black pt-30 pb-10  ${
        currentSelectedOption === "contact-us"
          ? "max-sm:pt-10 max-md:mt-0"
          : "max-sm:pt-60 max-md:mt-50 md:mt-80 max-md:mt-60 lg:mt-60  md:pt-40"
      }`}
    >
      <div
        className={`absolute md:w-[80%] max-sm:w-[90%] rounded-[20px] mx-auto bg-peach z-10 to-center ${
          currentSelectedOption === "contact-us" ? "hidden" : "visible"
        }`}
      >
        <div className="w-full h-full relative overflow-hidden flex py-10 md:py-12 flex-col  max-sm:justify-center gap-6 md:gap-7 justify-between items-center max-sm:py-20 px-20 max-sm:px-8">
          <span className=" circle circle-1"></span>
          <span className="circle circle-2"></span>
          <span className="circle circle-3"></span>
          <span className="circle circle-4"></span>
          <span className="circle circle-5"></span>
          <div className="flex flex-col  max-sm:text-center max-sm:justify-center items-center gap-8 max-sm:gap-7 z-10">
            <h3 className="text-white text-[40px] max-sm:text-[32px] font-medium w-[38%] md:w-[70%] md:text-center max-sm:w-full leading-[40px] max-sm:leading-[33px]">
              Let’s talk about your project
            </h3>
            <p className="w-[60%] md:w-[80%] md:text-center max-sm:w-full text-white text-[16px] max-sm:text-[15px] font-light">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button
            className="bg-white rounded-[8px] hover:bg-[#FFAD9B] hover:text-white cursor-pointer py-4 px-4 max-sm:p-4 z-10 text-[15px] font-medium max-sm:text-[16px]"
            onClick={() => navigate("/contact-us")}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <section className="h-full flex flex-col gap-10 justify-center  md:w-[90%] max-sm:w-[95%]  mx-auto">
        <div className="flex max-sm:flex-col max-sm:gap-5 justify-between items-center">
          <div
            className="flex items-center gap-3 "
            onClick={() => navigate("/")}
          >
            <img src={Oval} alt="" className="max-sm:h-6 max-sm:w-6" />
            <h1 className="text-white text-[18px] max-sm:text-[24px] font-semibold tracking-[0.2em]">
              DESIGNO
            </h1>
          </div>
          <div className="border-b h-1 w-[70%] md:hidden max-sm:w-[90%] mx-auto border-white/10"></div>
          <nav className="flex max-sm:flex-col max-sm:items-center  md:gap-10 text-[14px] max-sm:text-[14px] font-normal max-sm:gap-3.5 text-white">
            <NavLink to="/about-us">OUR COMPANY</NavLink>
            <NavLink to="/locations">LOCATIONS</NavLink>
            <NavLink to="/contact-us">CONTACT</NavLink>
          </nav>
        </div>
        <div className="w-full border max-md:hidden border-white/10"></div>
        <div className="grid grid-cols-3 max-sm:gap-5 max-sm:grid-cols-1 max-sm:text-center">
          <div className="flex flex-col justify-start text-[16px] max-sm:text-[13px] text-white/50">
            <span className="font-bold">Designo Central Office</span>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </div>
          <div className="flex flex-col justify-start text-[16px] max-sm:text-[13px] text-white/50 font-bold">
            <span>Contact Us (Central Office)</span>
            <span>P : +1 253-863-8967</span>
            <span>M : contact@designo.co</span>
          </div>
          <div className="flex md:items-end text-[25px] max-sm:text-[18px] md:justify-end max-sm:justify-center gap-3 text-peach">
            <BiLogoFacebookSquare />
            <FaYoutube />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

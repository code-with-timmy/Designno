import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function HeaderNav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
  }, [showNav]);

  return (
    <>
      <button
        className="text-[26px] font-semibold sm:hidden"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <HiOutlineX /> : <IoMenu />}
      </button>

      {showNav && (
        <div className="fixed w-full h-full top-22 left-0 md:hidden bg-black/50 z-30"></div>
      )}

      <nav
        className={`flex gap-10 max-sm:gap-6 text-[14px] text-dark-grey max-sm:flex-col max-sm:w-full max-sm:text-[17px] max-sm:items-start max-sm:text-white max-sm:py-8 max-sm:px-5 z-50 max-sm:top-22 max-sm:left-0 max-sm:font-light max-sm:absolute transition-transform ease-in-out duration-300 max-sm:bg-black transform ${
          showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-[100%]"
        }`}
      >
        <Link to="/about-us" onClick={() => setShowNav(false)}>
          OUR COMPANY
        </Link>
        <Link to="/locations" onClick={() => setShowNav(false)}>
          LOCATIONS
        </Link>
        <Link to="/contact-us" onClick={() => setShowNav(false)}>
          CONTACT
        </Link>
      </nav>
    </>
  );
}

export default HeaderNav;

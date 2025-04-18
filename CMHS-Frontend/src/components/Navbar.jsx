import logo from "/images/top-logo-transparent.png";
import NavList from "./NavList";
import menu from "/images/menu-black.png";
import { MdLogin } from "react-icons/md";
import { useEffect, useRef } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > 50) {
        elementRef2.current?.classList.add(
          "bg-white/50",
          "backdrop-blur-md",
          "shadow-sm"
        );
        elementRef3.current?.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "shadow-sm"
        );
      } else {
        elementRef2.current?.classList.remove(
          "bg-white/50",
          "backdrop-blur-md",
          "shadow-sm"
        );
        elementRef3.current?.classList.add(
          "bg-white",
          "bg-opacity-50",
          "shadow-sm"
        );
      }
    };

    window.addEventListener("scroll", handleOnScroll);
    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <>
      <nav
        className='w-full fixed px-3 lg:px-5 xl:px-[8%] flex items-center  justify-between z-50 transition-all duration-300'
        ref={elementRef2}
      >
        <div className='flex sm:w-auto lg:mr-8 mr-6 xl:mr-12 md:w-[20%]'>
          <img src={logo} alt='' className='w-25 h-auto cursor-pointer' />
          <h2 className='text-blue-500 font-bold  text-xl -ml-4 md:text-sm md:mt-11 hidden md:flex'>
            SwasthyaSetu
          </h2>
        </div>

        <ul
          className='hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-7 py-3 bg-white shadow-sm bg-opacity-50 lg:px-12'
          ref={elementRef3}
        >
          <NavList />
        </ul>

        <div className='flex items-center  gap-4'>
          <a
            href='#contact'
            className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4'
          >
            Login/Signup <MdLogin />
          </a>
          <a
            href='#contact'
            className='lg:hidden items-center gap-3 px-4 py-2.5 border border-gray-500 rounded-full ml-4'
          >
            <MdLogin />
          </a>
          <div className='md:hidden'>
          <MobileNavbar />
        </div>
        </div>

        
      </nav>
    </>
  );
};

export default Navbar;

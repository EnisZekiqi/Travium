'use client'
import Image from "next/image";
import { motion,AnimatePresence } from "motion/react";
import { IoIosClose,IoIosMenu,IoMdStarOutline ,IoMdStar,IoMdArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";


const Navbar = () => {


  const [modalNavbar, setModalNavbar] = useState(false)
  
  
  
  const containerVariant = {
    initial:{ opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChilder: 0.2 } },
     exit: { opacity: 0 }
  }

  const childrenVariant = {
     initial:{ opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.1 } },
      exit: { opacity: 0, x: 20, transition: { duration: 0.1 } }

  }

  const navigation = [
    {id:'#home',title:'Home'},{id:'#features',title:'Features'},{id:'#discover',title:'Discover'},{id:'#contact',title:'Contact'}
  ]
  
  const pathname = usePathname();
 const isHome = pathname === '/';
  const isResources = pathname.startsWith('/destination');

  return ( 
    <nav className="relative py-8 fixed px-8 sm:px-18 flex items-center gap-2 w-full z-50">
      {/* Lights */}
          <motion.div
              initial={{ opacity: 0.6, x: 30 }}
              animate={{opacity:[0.4,0.7,0.4],x:[30,-60,30],transition:{duration:10,repeat:Infinity,autoReverse:true}}}
              className="light absolute lg:block hidden w-[96px] h-[600px] left-[690px] lg:left-[100px] xl:left-[939px] -top-[227px] rounded-full opacity-50 
                      bg-[#818cf84d] blur-[32px] animate-float-slow rotate-[32deg]"></motion.div>
 <div className="lg:hidden block light absolute w-[60px] sm:w-[96px] h-[400px] left-[170px] xs:left-[350px] sm:left-[409px] xl:left-[729px] -top-[112px] rounded-full opacity-30 
                      bg-[rgba(129,140,248,0.3)] blur-[32px] animate-float-slow rotate-[32deg]"></div>
          {/* Left smaller orange light */}
          <motion.div className="dotts absolute hidden sm:block z-0 inset pointer-events-none mask-r-from-80% mask-t-from-50% overflow-visible top-[60px] right-[40px] sm:right-[220px]"></motion.div>

      <motion.div className="light absolute w-[80px] h-[300px] -left-[5%] sm:left-[15%] -top-[198px] rounded-full -rotate-[32deg]  opacity-60
                      bg-[rgba(250,152,75,.3)] blur-[30px] bg-blend-lighten animate-float-fast"></motion.div>
          <div className="light hidden xs:block absolute w-[80px] h-[300px] left-[80%] -top-[198px] rounded-full -rotate-[32deg]  opacity-60
                      bg-[rgba(250,152,75,.3)] blur-[30px] bg-blend-lighten animate-float-fast"></div>
 <div className="light absolute w-[80px] h-[300px] left-[80px] -top-[198px] rounded-full rotate-[30deg]  opacity-60
                      bg-[rgba(250, 152, 75, 1)] blur-[30px] hidden xl:block bg-blend-lighten animate-float-fast"></div>
      {/* Navbar content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        style={{border:modalNavbar ? 'none':'1px solid #1A1B24'}}
        className="navbar relative flex items-center justify-between w-full gap-6 border rounded-xl border-[#1A1B24] p-1.5 z-10">
        <div className="hidden sm:flex justify-between w-full">
          <div className="flex items-center gap-6">
          <div className="imagewrap rounded-lg p-1.5 bg-[#4F46E5]">
            <Image src="/travel.svg" alt="Logo" width={25} height={25} />
          </div>
          <ul className="flex items-center gap-4 font-normal text-sm text-white cursor-pointer">
          <a href="#home">  <li className="hover:text-white/50 transition duration-300">Home</li></a>
           <a href="#features"> <li className="hover:text-white/50 transition duration-300">Features</li></a>
           <a href="#discover"> <li className="hover:text-white/50 transition duration-300">Discover</li></a>
            <a href="#contact"><li className="hover:text-white/50 transition duration-300">Contact</li></a>
          </ul>
        </div>
       {isHome ?   <div className="flex gap-4 items-center">
        <Link href="/favorites" className="text-[#fff] bg-[#4F46E5] flex items-center gap-1.5 rounded-lg text-sm font-medium p-1.5">
          <IoMdStar className="text-yellow-400" size={22}/> Favorites
        </Link>
      </div> : 
              <Link href={`/`}>
        <button className="cursor-pointer flex items-center bg-[#4F46E5] p-1.5 mt-1 rounded-lg text-sm font-medium text-white">
          <IoMdArrowBack/> Back
        </button>
      </Link>

        }
        </div>
        <div className={`flex z-[300] justify-between items-center w-full 
    ${modalNavbar ? 'hidden' : 'flex'} sm:hidden`}
        >
          <div className="imagewrap rounded-lg p-1.5 bg-[#4F46E5]">
            <Image src="/travel.svg" alt="Logo" width={22} height={22} />
          </div>
        <button onClick={()=>setModalNavbar(prev => !prev)} className="cursor-pointer bg-transparent hover:bg-black/30 transition-all duration-300 p-1.5 rounded-lg text-sm font-medium text-white">
        {modalNavbar ?   <IoIosClose className="text-white" size={23}/> :   <IoIosMenu className="text-white" size={20}/>}
        </button>
        </div>
         <AnimatePresence>
           {modalNavbar && 
          <>
            <div className="fixed z-[300] top-0 bottom-0 right-0 left-0  w-full h-screen ">
               <div className="aaaa bg-[rgba(9,9,11,0.5)] border rounded-xl border-[#1A1B24] p-1.5 flex justify-between items-center sm:hidden w-full">
          <div className="imagewrap rounded-lg p-1.5 bg-[#4F46E5]">
            <Image src="/travel.svg" alt="Logo" width={22} height={22} />
          </div>
        <button onClick={()=>setModalNavbar(prev => !prev)} className="cursor-pointer bg-transparent hover:bg-black/30 transition-all duration-300 p-1.5 rounded-lg text-sm font-medium text-white">
        {modalNavbar ?   <IoIosClose className="text-white" size={23}/> :   <IoIosMenu className="text-white" size={20}/>}
        </button>
        </div>
            <motion.ul
                 variants={containerVariant}
                initial="initial"
                animate="animate"
                className="mt-10 flex flex-col gap-4 items-start border-b border-[#343434] pb-4 px-2">
                {navigation.map((sdc,index) => (
                  <motion.div
                    variants={childrenVariant}
                    key={index} className="k text-white">
                    <motion.a
                  
                      href={sdc.id} className="hover:text-white/50 transition duration-300">
                      {sdc.title}
                    </motion.a>
            </motion.div>
          ))}
              </motion.ul>
            <Link href="/favorites" className="text-[#fff] bg-[#4F46E5] text-center justify-center mt-4 flex items-center gap-1.5 rounded-lg text-sm font-medium p-1.5">
          <IoMdStar className="text-yellow-400" size={22}/> Favorites
        </Link>
          </div>  
        </>
        }
       </AnimatePresence>
      </motion.div>
      <AnimatePresence>
           {modalNavbar && 
          <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{opacity:1,transition:{duration:0.5}}}
            exit={{opacity:0}}
            className="fixed z-[0] top-0 bottom-0 right-0 left-0  w-full h-screen bg-black/100 opacity-100">
          
          </motion.div>  
        </>
        }
       </AnimatePresence>
    </nav>
  );
}

export default Navbar;

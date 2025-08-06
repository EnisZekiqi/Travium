'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const JoinUs = () => {

  const router = useRouter();
    const [query, setQuery] = useState('');
  
    const handleSearch = (e) => {
       e.preventDefault()
      if (query.trim() !== '') {
        router.push(`/destination/${query.toLowerCase()}`);
      }
    }
  

    return ( 
        <>
            <div id="contact" className="zoro flex flex-col items-center justify-center overflow-hidden gap-6 py-8 px-6 h-full  sm:h-[350px] w-full sm:w-[800px] mb-10 border border-[#1F212E] rounded-xl">
                <div className="relative">
                    <motion.div
                                  initial={{ opacity: 0.6, x: 30 }}
                                  animate={{opacity:[0.4,0.7,0.4],x:[30,-60,30],transition:{duration:10,repeat:Infinity,autoReverse:true}}}
                                  className="light absolute lg:block hidden w-[96px] h-[600px] left-[690px] lg:left-[100px] xl:left-[239px] -top-[327px] rounded-full opacity-50 
                                          bg-[#818cf84d] blur-[32px] animate-float-slow rotate-[32deg]"></motion.div>
                     <div className="lg:hidden block light absolute w-[60px] sm:w-[96px] h-[400px] left-[170px] xs:left-[350px] sm:left-[409px] xl:left-[729px] -top-[112px] rounded-full opacity-30 
                                          bg-[rgba(129,140,248,0.3)] blur-[32px] animate-float-slow rotate-[32deg]"></div>
                              {/* Left smaller orange light */}
                              <motion.div className="dotts absolute hidden sm:block z-0 inset pointer-events-none mask-r-from-80% mask-t-from-50% overflow-visible top-[60px] right-[0px] sm:right-[220px]"></motion.div>
                    
                          <motion.div className="light absolute w-[80px] h-[300px] -left-[5%] sm:left-[5%] -top-[198px] rounded-full -rotate-[32deg]  opacity-60
                                          bg-[rgba(250,152,75,.3)] blur-[30px] bg-blend-lighten animate-float-fast"></motion.div>
                              <div className="light hidden xs:block absolute w-[80px] h-[300px] left-[30%] -top-[198px] rounded-full -rotate-[32deg]  opacity-60
                                          bg-[rgba(250,152,75,.3)] blur-[30px] bg-blend-lighten animate-float-fast"></div>
                     <div className="light absolute w-[80px] h-[300px] left-[20px] -top-[198px] rounded-full rotate-[30deg]  opacity-60
                                          bg-[rgba(250, 152, 75, 1)] blur-[30px] hidden xl:block bg-blend-lighten animate-float-fast"></div>
               </div>
               <div className="logob p-3 rounded-2xl">
                 <Image src="/travel.svg" alt="Logo" width={35} height={35} />
                </div>
                <h1 className=" text-xl sm:text-2xl text-center text-white z-[10]">Plan Smarter Trips with Travium</h1>
                <p className="text-sm sm:text-md font-light sm:font-base text-center w-full sm:w-[75%]   text-white/50">Be the first to explore hidden destinations, real-time weather updates, and curated favorites. Search up now and start your next adventure</p>
             <div className=" w-full sm:w-[460px] ">
  <div className="flex overflow-hidden rounded-2xl border p-1.5 border-[#4F46E5]/60 bg-[#0A0A0C] focus-within:border-[#818CF8] focus-within:shadow-[inset_0_2px_8px_rgba(129,140,248,0.3)] transition-all duration-200">
   <form onSubmit={handleSearch} className="flex w-full items-center gap-2">
  <input
    type="text"
    placeholder="Type a City..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="flex-1 px-4 py-2 bg-transparent text-white placeholder-white/40 focus:outline-none"
  />
  <button
    type="submit"
    className="px-4 py-2 text-sm sm:text-md -ml-12 sm:-ml-0 bg-[#0B0B0E] rounded-xl shadow-[inset_0_2px_8px_rgba(129,140,248,0.3)] text-white hover:bg-[#1A1A24] transition"
  >
    Search
  </button>
</form>

  </div>
</div>
        </div>
        </>
     );
}
 
export default JoinUs;

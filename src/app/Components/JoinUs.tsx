'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const JoinUs = () => {

  const router = useRouter();
    const [query, setQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
      if (query.trim() !== '') {
        router.push(`/destination/${query.toLowerCase()}`);
      }
    }
  

    return ( 
        <>
            <div id="contact" className="zoro relative flex flex-col items-center justify-center overflow-hidden gap-6 py-8 px-6 h-full sm:h-[350px] w-full sm:w-[800px] mb-10 border border-[#1F212E] rounded-xl before:absolute before:inset-0 before:backdrop-blur-sm before:bg-black/20 before:rounded-xl before:z-0">
                
               <div className="logob p-3 rounded-2xl z-10">
                 <Image src="/travel.svg" alt="Logo" width={35} height={35} />
                </div>
                <h1 className=" text-xl sm:text-2xl text-center text-white z-[10]">Plan Smarter Trips with Travium</h1>
                <p className="text-sm sm:text-md font-light sm:font-base text-center w-full sm:w-[75%] z-10   text-white/50">Be the first to explore hidden destinations, real-time weather updates, and curated favorites. Search up now and start your next adventure</p>
             <div className=" w-full sm:w-[460px]  z-10">
  <div className="flex overflow-hidden rounded-2xl border p-1.5  border-[#818cf8]/60 bg-[#0A0A0C] focus-within:border-[#818CF8] focus-within:shadow-[inset_0_2px_8px_rgba(129,140,248,0.3)] transition-all duration-200">
   <form onSubmit={handleSearch} className="flex w-full items-center gap-2 ">
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

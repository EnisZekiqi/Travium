"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "motion/react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import MouseTrap from "mousetrap";


const images = [
  'https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1032&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603551664565-1b3c3dd61075?w=500&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1694475672017-80a3a735c4ac?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=500&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=500&auto=format&fit=crop'
];


const HeroSection = () => {
  const columns = 4;
const columnedImages = Array.from({ length: columns }, (_, colIndex) =>
  images.filter((_, i) => i % columns === colIndex)
);

  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
     e.preventDefault()
    if (query.trim() !== '') {
      router.push(`/destination/${query.toLowerCase()}`);
    }
  }


  return (
    <section className="relative  text-white h-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background image */}
      <motion.span
        initial={{ y: 30 }}
        animate={{y:0,transition:{duration:0.3,delay:0.1,  type: "spring",       // spring animation instead of duration
    damping: 15,          // lower = bouncier, higher = less bounce
    stiffness: 120, }}}
        className="Al shadow-[inset_0_1px_0px_rgba(165, 180, 252, .3)]  flex items-center gap-2 text-xs sm:text-sm font-medium p-1.5 border border-[#3B3F59] mt-4">
        <FaLocationArrow size={12} />
        Your smart companion for every journey
      </motion.span>

      {/* Headline */}
      <motion.h1
      initial={{ y: 30 }}
        animate={{y:0,transition:{duration:0.3,delay:0.3,  type: "spring",       // spring animation instead of duration
    damping: 15,          // lower = bouncier, higher = less bounce
    stiffness: 120, }}}
        className="relative z-20 text-center leading-16 tracking-tight text-balance text-[29px] xs:text-[38px] sm:text-[46px] md:text-[56px] font-medium mt-6 w-[100%] md:w-[80%] pointer-events-none">
        Discover{" "}
        <span className="bg-gradient-to-r from-[#A5B4FC] to-[#C7D2FE] bg-clip-text text-transparent">
          New Horizons
        </span>{" "}
        with Explorer
      </motion.h1>

      {/* Description */}
      <motion.p
      initial={{ y: 30 }}
        animate={{y:0,transition:{duration:0.3,delay:0.4,  type: "spring",       // spring animation instead of duration
    damping: 15,          // lower = bouncier, higher = less bounce
    stiffness: 120, }}}
        className="text-white/50 text-sm sm:text-md font-light mb-8 text-center">
        Plan smarter. Travel further. Make every journey unforgettable
      </motion.p>
          
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

      <motion.div
     initial={{ y: 30 }}
        animate={{y:0,transition:{duration:0.3,delay:0.5,  type: "spring",       // spring animation instead of duration
    damping: 15,          // lower = bouncier, higher = less bounce
    stiffness: 120, }}}
        className="bg-[#a5b4fcff]/30 z-[10] mt-10 mb-14 relative w-[100%] h-[400px] sm:w-[500px] sm:h-[450px] md:w-[600px] md:h-[450px] lg:w-[750px] lg:h-[500px] p-3  rounded-[14px]  flex flex-col items-center justify-start">123
    <motion.div
  className="as absolute top-0 left-0 w-[50%] h-[50%] bg-white/50 rounded-xl shadow-lg"
  animate={{
    transform: [
      "translate3d(0%, 0%, 0)",       // top-left
      "translate3d(100%, 0%, 0)",     // top-right
      "translate3d(100%, 100%, 0)",   // bottom-right
      "translate3d(100%, 100%, 0)",   // pause
      "translate3d(0%, 100%, 0)",     // bottom-left
      "translate3d(0%, 0%, 0)"        // back to top-left
    ],
  }}
  transition={{
    duration: 12,         // full cycle
    times: [0, 0.2, 0.4, 0.5, 0.7, 1], // define exact steps & pause
    repeat: Infinity,
    ease: "easeInOut",
    delay:3
  }}
  style={{ transformOrigin: "center" }}
/>

<motion.div
  className="as2 absolute bottom-0 right-0 w-[50%] h-[50%] bg-yellow-200/60 rounded-xl shadow-lg"
  animate={{
      transform: [
      "translate3d(0%, 0%, 0)",        // bottom-right (starting point)
      "translate3d(-100%, 0%, 0)",     // bottom-left
      "translate3d(-100%, -100%, 0)",  // top-left
      "translate3d(-100%, -100%, 0)",  // pause
      "translate3d(0%, -100%, 0)",     // top-right
      "translate3d(0%, 0%, 0)"         // back to bottom-right
    ]
  }}
  transition={{
    duration: 12,
    times: [0, 0.2, 0.4, 0.5, 0.7, 1],
    repeat: Infinity,
    ease: "easeInOut",
    delay:2.5
  }}
  style={{ transformOrigin: "center" }}
/>




        <div className="absolute  flex flex-col items-center  top-0 bottom-0 ml-1 mt-1 right-0 left-0 w-[98.8%] rounded-[10px] h-[98.2%] z-100 bg-[#09090B]">
           <div className="w-full m-2 px-2 ">
  <div className="flex overflow-hidden bg-[#0E0E10] rounded-2xl border p-1.5 border-[#343434] focus-within:border-[#818CF8] focus-within:shadow-[inset_0_2px_8px_rgba(129,140,248,0.3)] transition-all duration-200">
    <input
      type="text"
      placeholder="Enter your destination"
      className="flex-1 px-2 sm:px-4 py-0.5 sm:py-1.5  text-white placeholder-white/40 focus:outline-none"
    />
    <button className="px-2 py-1 sm:px-4 sm:py-2  text-white hover:bg-[#1A1A24] transition">
      <CiSearch/>
    </button>
  </div>
          </div>
          <div className="flex items-start justify-between w-full px-6 gap-4">
            <div className="hidden sm:flex flex-col justify-between mt-4 border-r border-[#343434] h-[80%] pr-16">
              <ul>
                <li className="rounded-full p-2 bg-[#151623] text-sm font-light">Explore</li>
                <li className="rounded-full p-2  text-sm font-light text-white/70">Weather</li>
                <li className="rounded-full p-2 bg-[] text-sm font-light text-white/70">Destination</li>
                <li className="rounded-full p-2 bg-[] text-sm font-light text-white/70">Saved</li>
              </ul>
              <div className="-mt-10">
                 <p className="text-white/50 text-sm font-light">- Help</p>
              <p className="text-white/50 text-sm font-light">- My Account</p>
             </div>
            </div>
           <div className="grid mask-b-from-20% mask-b-to-96.5% sm:mask-b-to-80% grid-cols-4 gap-3 mt-2 w-full h-full overflow-y-auto">
  {columnedImages.map((col, colIndex) => (
    <div key={colIndex} className="flex flex-col items-start gap-3">
      {col.map((src, imgIndex) => (
        <img
          key={imgIndex}
          src={src}
          className="w-full h-full object-cover rounded-lg mb-2"
          alt={`img-${imgIndex}`}
        />
      ))}
    </div>
  ))}
</div>

         </div>
</div>
     </motion.div>
    </section>
  );
};

export default HeroSection;

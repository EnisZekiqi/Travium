'use client'
import { CiEdit,CiMap ,CiLocationArrow1 ,CiMapPin  } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";
import { IoMdSunny,IoMdSnow ,IoMdCloudy,IoMdStar ,IoMdStarOutline   } from "react-icons/io";

const Trending = () => {


    

  const [hover, setHover] = useState(false)
  const [hoverv2,setHoverv2]=useState('')
    
   

const card1 = [
        { icon: <CiEdit size={22} className={`${hover ? 'bg-[#818cf8] text-white': ''}`}/>, title: 'Write different locations' },
        { icon: <CiMap size={22} />, title: 'Map provied with informations' },
        { icon: <CiLocationArrow1 size={22} />, title: 'Sends you best result' },
        { icon: <CiMapPin size={22} />, title: 'Shows the best route' }
    ]

const containerVariant = {
    initial:{ opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChilder: 0.1 } },
     exit: { opacity: 0 }
  }

  const childrenVariant = {
     initial:{ opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.1 } },
      exit: { opacity: 0, y: 20, transition: { duration: 0.1 } }

  }
    
    return ( 
        <div id="discover" className="flex flex-col items-center justify-center gap-30 h-full w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
                <div
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    className="card1 w-[340px] sm:w-[100%] md:w-[550px] border border-[#2E3045] p-8 flex flex-col gap-16 items-center">
                    <motion.div
                        variants={containerVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once:true}}
                        className="flex items-center gap-2 justify-around w-full">
                    {card1.map((sfc, index) => (
                        <motion.div
                            variants={childrenVariant}
                            key={index} className="flex flex-col items-center gap-4 opacity-100">
    <span
      className={` p-2 w-fit h-fit  ${
        hover && index === 0 ? 'bg-[#818cf8] text-white rounded-full' : 'text-[#64656E] rounded-full card1'
      } transition-all duration-300`}
    >
      {sfc.icon}
    </span>
    <p
      className={`text-xs font-normal text-center w-full sm:w-[70%] ${
        hover && index === 0 ? 'text-white' : 'text-[#71717a]'
      }`}
    >
      {sfc.title}
    </p>
  </motion.div>
))}
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, scale: 0.6 }}
                        whileInView={{ y: 0, scale: 1, transition: { duration: 0.3, delay: 0 } }}
                        viewport={{once:true}}
                        className=" w-full">
  <div className={`flex overflow-hidden rounded-2xl border p-1.5 ${hover ? 'inputchange border-[#818cf8]':'border-[#26283A]'}   focus-within:border-[#818CF8] focus-within:shadow-[inset_0_2px_8px_rgba(129,140,248,0.3)] transition-all duration-200`}>
    <input
      type="text"
      placeholder={hover ? 'Paris':'Type a destination...'}
      className={`  ${hover ? '':''} flex-1 px-4 py-2 bg-transparent text-white placeholder-white/40 focus:outline-none`}
    />
    <button className="card1 px-4 py-2 text-sm sm:text-md -ml-8 sm:-ml-0 rounded-lg border border-[#26283A]  text-[#585860] transition">
      <FaLocationArrow size={18}/>
    </button>
  </div>
</motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.3, delay: 0.2 } }}
                    viewport={{once:true}}
                    className="flex flex-col items-start gap-2 w-[100%] md:w-[50%]">
                    <h3 className="text-[#818cf8] text-base font-normal">Search by Simply Typing</h3>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#fafafa] leading-10">Find Destinations Instantly</h1>
                    <p className="text-sm sm:text-base font-normal text-[#a1a1aa] w-full sm:w-[80%]">Type in any place or keyword, and our AI instantly finds the best destinations, hidden spots, and local recommendations tailored for you.</p>
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-16 w-full">
                <div
                    
                    className="card1 w-[340px] sm:w-full md:w-[550px] border border-[#2E3045] p-8 flex flex-col gap-16 items-center">
                    <motion.div
              variants={containerVariant}
              initial="initial"
              whileInView="animate"
              viewport={{once:true,amount:0.2}}
              className="first-background w-[320px] h-[200px] sm:w-[350px] sm:h-[225px] flex flex-col items-center justify-center">
                       
                        <div className="weather-grid flex flex-col gap-4 w-full">
  {/* City 1 */}
                <motion.div
                  variants={childrenVariant}
                  onMouseEnter={() => setHoverv2('london')}
                  onMouseLeave={()=>setHoverv2('')}
                  className={`flex items-center ${hoverv2 === 'london' ? 'cities':''} transition-all duration-300 justify-between bg-[#1b1b25] rounded-lg p-3`}>
    <div className="flex flex-col">
      <h3 className={`text-sm ${hoverv2  === 'london' ? 'text-black/70':'text-white'} transition-all duration-300 font-semibold `}>London</h3>
      <p className={`text-xs ${hoverv2  === 'london' ? 'text-black/50':'text-white/50'} transition-all duration-300`}>United Kingdom</p>
    </div>
    <div className="flex items-center gap-3 text-[#7A819B]">
      <IoMdCloudy />
      <p className={`text-sm ${hoverv2 === 'london' ? 'text-black/70':'text-white'} transition-all duration-300`}>15°C</p>
    </div>
  </motion.div>

  {/* City 2 */}
                <motion.div
                  variants={childrenVariant}
   onMouseEnter={() => setHoverv2('rome')}
                  onMouseLeave={()=>setHoverv2('')}
                  className={`flex items-center ${hoverv2 === 'rome' ? 'citiesv2':''} transition-all duration-300 justify-between bg-[#1b1b25] rounded-lg p-3`}>
    <div className="flex flex-col">
      <h3 className="text-sm font-semibold text-white">Rome</h3>
      <p className="text-xs text-white/50">Italy</p>
    </div>
    <div className="flex items-center gap-3 text-[#fcbc79]">
      <IoMdSunny/>
      <p className="text-sm text-white">22°C</p>
    </div>
  </motion.div>

  {/* City 3 */}
                <motion.div
                  variants={childrenVariant}
   onMouseEnter={() => setHoverv2('norway')}
                  onMouseLeave={()=>setHoverv2('')}
                  className={`flex items-center ${hoverv2 === 'norway' ? 'citiesv3':''} transition-all duration-300 justify-between bg-[#1b1b25] rounded-lg p-3`}>
    <div className="flex flex-col">
      <h3 className="text-sm font-semibold text-white">Oslo</h3>
      <p className="text-xs text-white/50">Norway</p>
    </div>
    <div className="flex items-center gap-3 text-[#818cf8]">
      <IoMdSnow/>
      <p className="text-sm text-white">-2°C</p>
    </div>
  </motion.div>
</div>


                    </motion.div>
                    
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.3, delay: 0.2 } }}
                    viewport={{once:true}}
                    className="flex flex-col items-start gap-2 w-[100%] md:w-[50%]">
                    <h3 className="text-[#fcbc79] text-base font-normal">Stay Weather-Ready</h3>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#fafafa] leading-10">Check Weather Before You Go</h1>
                    <p className="text-sm sm:text-base font-normal text-[#a1a1aa] w-full sm:w-[80%]">Get real-time weather updates for any destination so you can plan better and travel without surprises.</p>
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
                <div
                    
                    className="card1 w-[340px] sm:w-full md:w-[550px] border border-[#2E3045] p-8 flex flex-col gap-16 items-center">
                  <div className="favorites flex flex-col gap-4 w-full">
  {/* Destination 1 */}
  <div className="flex items-center justify-between bg-[#1b1b25] border border-[#26283A] hover:border-yellow-400/30 transition-colors duration-300 rounded-lg p-3">
    <div className="flex items-center gap-3">
      <span className="text-yellow-400">
        <IoMdStarOutline />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-white">Tokyo</h3>
        <p className="text-xs text-white/50">Japan</p>
      </div>
    </div>
    <button className="text-xs bg-[#09090B] px-3 py-1.5 rounded-md cursor-pointer">View</button>
  </div>

  {/* Destination 2 */}
  <div className="flex items-center justify-between bg-[#1b1b25] border border-[#26283A] hover:border-yellow-400/30 transition-colors duration-300 rounded-lg p-3">
    <div className="flex items-center gap-3">
      <span className="text-yellow-400"><IoMdStar/></span>
      <div>
        <h3 className="text-sm font-semibold text-white">Paris</h3>
        <p className="text-xs text-white/50">France</p>
      </div>
    </div>
    <button className="text-xs bg-[#09090B] px-3 py-1.5 rounded-md cursor-pointer">View</button>
  </div>

  {/* Add new */}
  <button className="text-sm mt-2 text-white/80 hover:text-white flex items-center gap-2">
    <span className="text-yellow-400 text-xl">+</span> Add a new favorite
  </button>
</div>


                    
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.3, delay: 0.2 } }}
                    viewport={{once:true}}
                    className="flex flex-col items-start gap-2 w-[100%] md:w-[50%]">
                    <h3 className="text-[#e973bb] text-base font-normal">Save Your Favorites</h3>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-balance text-[#fafafa] leading-10">Build Your Personal Travel List</h1>
                    <p className="text-sm sm:text-base font-normal text-[#a1a1aa] w-full sm:w-[80%]">Save the destinations you love, revisit them anytime, and plan your next journey with your curated favorites list.</p>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Trending;
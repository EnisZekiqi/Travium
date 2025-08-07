'use client'
import Image from "next/image";
import { motion } from "motion/react";
import { CiCloudOn,CiCompass1,CiFaceSmile   } from "react-icons/ci";


const Features = () => {


    const whyUs = [
         { 
    icon: <CiCloudOn size={25}/>, 
    title: 'Smart Itineraries', 
    description: 'Build AI-powered trip plans tailored to your travel style and budget.' 
  },
  { 
    icon: <CiCompass1 size={25}/>, 
    title: 'Hidden Gems', 
    description: 'Discover unique spots and local favorites you won’t find in guidebooks.' 
  },
  { 
    icon: <CiFaceSmile size={25}/>, 
    title: 'Seamless Travel', 
    description: 'Get real-time tips, offline access, and instant updates while on the move.' 
  },
    ]

const containerVariant = {
    initial:{ opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChilder: 0.2 } },
     exit: { opacity: 0 }
  }

  const childrenVariant = {
     initial:{ opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
      exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }

  }

    return ( 
        <div id="features" className="flex flex-col items-center justify-center">
             <div className="logo-wrapper ">
              <div className="logo-glow"></div>

  <Image src="/travelv2.png" width={195} height={195} alt="Logo" className="logo-img  mask-b-from-25% mask-b-to-70%" />
  <div className="grain-overlay"></div>
            </div>
            
            <div className="flex flex-col items-center gap-4 justify-center -mt-[120px]">
                 <motion.span
                    initial={{ opacity:0,y: 30 }}
                    whileInView={{opacity:1,y:0,transition:{duration:0.3,delay:0.1,  type: "spring",       // spring animation instead of duration
                damping: 15,          // lower = bouncier, higher = less bounce
                        stiffness: 120,
                    }
                    }}
                    viewport={{once:true}}
                    className="Al shadow-[inset_0_1px_0px_rgba(165, 180, 252, .3)]  flex items-center gap-2 text-xs sm:text-sm font-medium p-1.5 border border-[#3B3F59]">
                   
                  Smarter trips, unforgettable memories
                </motion.span>
                <motion.h1
                 initial={{opacity:0, y: 30 }}
        whileInView={{opacity:1,y:0,transition:{duration:0.3,delay:0.3,  type: "spring",       // spring animation instead of duration
    damping: 15,          // lower = bouncier, higher = less bounce
                        stiffness: 120,
                    }
                    }}
                    viewport={{once:true}}
                    className="text-2xl sm:text-4xl text-white font-medium text-center">  Explore Smarter, Travel Further</motion.h1>
                <motion.p
                 initial={{opacity:0, y: 30 }}
        whileInView={{opacity:1,y:0,transition:{duration:0.3,delay:0.4,  type: "spring",       // spring animation instead of duration
    damping: 15,          // lower = bouncier, higher = less bounce
                        stiffness: 120,
                    }
                    }}
                    viewport={{once:true}}
                    className="text-sm text-white/50 text-center w-full sm:w-2/5"> Discover hidden gems, build AI-powered itineraries, and enjoy seamless journeys— 
  all in one powerful travel companion.</motion.p>
                <motion.div
                    variants={containerVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once:true}}
                    className="flex flex-col md:flex-row items-start md:items-center justify-around mt-4 gap-6.5 w-full">
                    {whyUs.map((zdx, index) => (
                        <motion.div
                        variants={childrenVariant}
                            key={index} className=" pt-4 mr-4 border-t border-[#343434] flex flex-col items-start w-full">
                            <span className="border-t border-[#C4CFFE] -mt-[17.5px] pt-4 mb-4 text-[#7A819B]">{zdx.icon}</span>
                            <h2 className="font-medium text-lg">{zdx.title}</h2>
                            <p className="text-white/50 text-sm font-normal">{zdx.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
       </div>




     );
}
 
export default Features;
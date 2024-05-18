'use client' 
import AnimatedText from './AnimatedText'
import { motion } from "framer-motion";
import { SkymarkLogo } from './Navbar';

export default function HeroText() {
	const phrases = ['Affordable', 'Reliable', 'Secure', 'Easy to Use']

	return (
		<section
			className="h-screen w-screen flex flex-col bg-cover px-4 sm:py-[28%] md:py-[20%] py-[58%] items-center text-center"
			style={{
				backgroundImage: 'url(/images/soldier-opacity.jpg)',
			}}
			
		>
      <motion.h3
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl font-medium"
  >
    We Build <br></br>
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className='text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl'
    >
      Micro IFF Drone Systems
    </motion.span>
  </motion.h3>
	  {/* <div className="from-0% absolute inset-0 bg-gradient-to-t from-zinc-950 to-5%" /> */}

		</section>
	)
}
'use client' 
import AnimatedText from './AnimatedText'
import { motion } from "framer-motion";

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
        className="text-3xl font-medium text-gray-300 sm:text-4xl md:text-5xl lg:text-7xl"
      >
        We Build Technology That Is
        <AnimatedText phrases={phrases} />
      </motion.h3>
		</section>
	)
}
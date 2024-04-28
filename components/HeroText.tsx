'use client'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './hero.module.css'

export default function HeroText() {
	const phrases = [
		'Affordable',
		'Reliable',
		'Secure',
		'Easy to Use'
	]
    
	return (
		<section
			className="hero-parent h-screen w-screen bg-cover px-4  lg:py-[18%] items-center text-center"
			style={{
				backgroundImage: 'url(/images/soldier-opacity.jpg)',
			}}
		>
			<h3 className="hero-text text-3xl font-medium text-gray-300 sm:text-4xl md:text-5xl lg:text-7xl">
				We Build Technology That Is
				<AnimatedText phrases={phrases} />
			</h3>
		</section>
	)
}

const ONE_SECOND = 1000
const WAIT_TIME = ONE_SECOND * 3
const STAGGER = 0.025

const AnimatedText = ({ phrases }: { phrases: string[] }) => {
	const countRef = useRef(0)
	const [active, setActive] = useState(0)

	useEffect(() => {
		const intervalRef = setInterval(() => {
			setActive((pv) => (pv + 1) % phrases.length)
		}, WAIT_TIME)

		return () => clearInterval(intervalRef)
	}, [phrases])

	return (
		<div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-4">
			<AnimatePresence mode="popLayout">
				{phrases[active].split(' ').map((word, wordIndex) => {
					if (wordIndex === 0) {
						countRef.current = 0
					}

					return (
						<motion.div key={word} className="whitespace-nowrap text-violet-50">
							{word.split('').map((letter, letterIndex) => {
								const content = (
									<motion.span
										initial={{
											opacity: 0,
											scale: 0,
										}}
										animate={{
											opacity: 1,
											scale: 1,
										}}
										exit={{
											opacity: 0,
											scale: 0,
										}}
										transition={{
											delay: countRef.current * STAGGER,
											ease: 'easeInOut',
											duration: 0.25,
										}}
										className="inline-block"
										key={letterIndex}
									>
										{letter}
									</motion.span>
								)

								countRef.current++
								return content
							})}
						</motion.div>
					)
				})}
			</AnimatePresence>
		</div>
	)
}

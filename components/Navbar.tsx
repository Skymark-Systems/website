'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Navlinks } from '@/constants/Navlinks'

export const Navbar = () => {
	return (
		<nav
        // glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl
			className="fixed left-[50%] top-8 flex sm:w-[400px] md:w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-200 z-50 backdrop-blurborder-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur"
		>
			<Link href="/">
				<Image
					src="/images/skymark.png"
					alt="Logo"
					width={80}
					height={25}
					className="shrink-0"
					// layout="fill"
					objectFit="cover"
				/>
			</Link>
			{Navlinks.map((link, id) => (
				<NavLink key={id} href={link.href} title={link.title} />
			))}
			<JoinButton title="Contact Us" link="/contact" />
		</nav>
	)
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
	return (
		<Link href={href} rel="nofollow" className="block overflow-hidden">
			<motion.div
				whileHover={{ y: -20 }}
				transition={{ ease: 'backInOut', duration: 0.5 }}
				className="h-[20px]"
			>
				<span className="flex h-[20px] items-center">{title}</span>
				<span className="flex h-[20px] items-center text-neutral-50">
					{title}
				</span>
			</motion.div>
		</Link>
	)
}

const JoinButton = ({ title, link }: { title: string; link: string }) => {
	return (
		<Link href={link}>
			<button
				className={`
          relative z-50 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-50 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
			>
				{title}
			</button>
		</Link>
	)
}

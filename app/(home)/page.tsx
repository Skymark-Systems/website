
import { FiMenu, FiArrowUpRight } from 'react-icons/fi'
import React from 'react'
import Image from 'next/image'
import StackedCardTestimonials from '@/components/Testimonials'
import Statistics from '@/components/Stats'
import SmoothScroll from '@/providers/SmoothScroll'
import HeroText from '@/components/HeroText'
import Footer from '@/components/Footer'
import ColumnFeatures from '@/components/ColumnFeatures'

export default function Home() {
	return (
		<div
			className="flex flex-col z-0">
                <SmoothScroll>
				<HeroText />
				<ColumnFeatures />
				{
					// <StackedCardTestimonials />
				}
				<div
					className="flex "
					style={{
						backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
					}}
				>
					<Statistics />
				</div>

				
					{/* <Footer /> */}
				
			</SmoothScroll>
		</div>
	)
}
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
		<div className="flex flex-col z-0">
			<SmoothScroll>
				<HeroText />
				<ColumnFeatures />
				{// <StackedCardTestimonials />
      }
				<Statistics />
				{ // <Footer />
}
			</SmoothScroll>
		</div>
	)
}

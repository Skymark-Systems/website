'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { SkymarkLogo } from './Navbar'

type FeatureType = {
	id: number
	callout: string
	title: string
	description: string
	contentPosition: 'l' | 'r'
	image: string
}

const features: FeatureType[] = [
  {
		id: 1,
		callout: "Why we Exist",
		title: "Modern Warfare Challenges",
        description: 'Modern military operations require portable and flexible Identification Friend or Foe (IFF) systems to prevent fratricide, especially with the rise of small commercial drones in action. Traditional IFF tools are large and stationary, unsuitable for dynamic combat environments like urban warfare. Recent conflicts in Israel and Ukraine highlight this issue, with significant friendly fire incidents and compromised positions. Current identification methods are slow and error-prone, underscoring the need for advanced, portable IFF technology.',
		contentPosition: 'r',
		image:
			'https://images.unsplash.com/photo-1548430842-2de69aaf6bc8?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 2,
		callout: 'How it Works',
		title: 'IFF Technology',
        description: 'The drone IFF tool utilizes state-of-the-art Identification Friend or Foe (IFF) technology to accurately distinguish between friendly and hostile targets in real-time. By leveraging RF technology and advanced cyber security algorithms, our system ensures precise target identification, minimizing the risk of friendly fire incidents and enhancing situational awareness on the battlefield.',
		contentPosition: 'l',
		image:
			'https://images.unsplash.com/photo-1611878583599-5a1ba474063b?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 3,
		callout: 'Usage ',
		title: "Easy to Use",
        description: 'Skymark is an incredibly easy-to-use point and click system. Operators look in the direction of a drone and click a button to scan it. The small pointer will flash green if the drone is friendly and has been tagged as such.',

		contentPosition: 'r',
		image:
			'/images/soldiers-drone.jpg',
	}
]

export default function ColumnFeatures() {
	const [featureInView, setFeatureInView] = useState<FeatureType>(features[0])

	return (
		<section className="relative mx-auto max-w-7xl w-screen">
      <div
      className='mx-auto text-center flex flex-row items-center justify-center px-10 h-screen'
    >
      <SkymarkLogo size={5}/>
    </div>
			<SlidingFeatureDisplay featureInView={featureInView} />

			{/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
			<div className="-mt-[100vh] hidden md:block text-white" />

			{features.map((s) => (
				<Content
					key={s.id}
					featureInView={s}
					setFeatureInView={setFeatureInView}
					{...s}
				/>
			))}
		</section>
	)
}

const SlidingFeatureDisplay = ({
	featureInView,
}: {
	featureInView: FeatureType
}) => {
	return (
		<div
			style={{
				justifyContent:
					featureInView.contentPosition === 'l' ? 'flex-end' : 'flex-start',
			}}
			className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
		>
			<motion.div
				layout
				transition={{
					type: 'spring',
					stiffness: 1000,
					damping: 90,
				}}
				className="w-3/5 rounded-xl p-8"
			>
				<ExampleFeature featureInView={featureInView} />
			</motion.div>
		</div>
	)
}

const Content = ({
	setFeatureInView,
	featureInView,
}: {
	setFeatureInView: Dispatch<SetStateAction<FeatureType>>
	featureInView: FeatureType
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, {
		margin: '-150px',
	})

	useEffect(() => {
		if (isInView) {
			setFeatureInView(featureInView)
		}
	}, [isInView])

	return (
		<section
			ref={ref}
			className="relative z-0 flex h-fit md:h-screen"
			style={{
				justifyContent:
					featureInView.contentPosition === 'l' ? 'flex-start' : 'flex-end',
			}}
		>
			<div className="grid w-full place-content-center px-4 md:w-2/5 md:px-8 py-8">
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
				>
					<span className="rounded-full bg-gray-800 px-2 py-1.5 text-xs font-medium text-white">
						{featureInView.callout}
					</span>
					<p className="my-3 text-5xl font-bold text-foreground text-white ">{featureInView.title}</p>
					<p className="text-secondary-content text-white">{featureInView.description}</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					className="mt-8 block md:hidden"
				>
					<ExampleFeature featureInView={featureInView} />
				</motion.div>
			</div>
		</section>
	)
}

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
	return (
		<div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
			<Image
				src={featureInView.image}
				objectFit="cover"
				layout="fill"
				alt="Feature Image"
				className="rounded-lg"
			/>
		</div>
	)
}

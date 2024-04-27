'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

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
		callout: 'How it Works',
		title: 'IFF Technology',
        description: 'The IFF drone strike tool utilizes state-of-the-art Identification Friend or Foe (IFF) technology to accurately distinguish between friendly and hostile targets in real-time. By leveraging advanced algorithms and sensor integration, our system ensures precise target identification, minimizing the risk of friendly fire incidents and enhancing situational awareness on the battlefield.',
		contentPosition: 'r',
		image:
			'https://images.unsplash.com/photo-1611878583599-5a1ba474063b?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 2,
		callout: "How it's Made",
		title: "Premium Quality",
        description: 'Our IFF drone strike tool is meticulously crafted using premium-quality materials and cutting-edge manufacturing processes. Each component undergoes rigorous testing and quality assurance procedures to ensure reliability, durability, and performance in the most demanding operational environments. From design to production, we prioritize excellence and precision to deliver a superior product that meets the highest standards of quality and craftsmanship.',
		contentPosition: 'l',
		image:
			'https://images.unsplash.com/photo-1548430842-2de69aaf6bc8?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 3,
		callout: 'Usage ',
		title: "Easy to Use",
        description: 'The IFF drone strike tool is designed for intuitive and efficient use in the field. With a user-friendly interface and simplified operation, operators can quickly and effectively deploy the system to identify and engage potential threats with confidence. Whether conducting reconnaissance missions or supporting ground forces, our tool empowers operators with actionable intelligence and real-time decision-making capabilities to enhance mission success and operational effectiveness.',

		contentPosition: 'r',
		image:
			'https://images.unsplash.com/photo-1488263590619-bc1fff43b6c1?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 4,
		callout: 'Protection',
		title: 'Nulls Drone Strikes',
		description:'Drone strikes, often conducted remotely and autonomously, have become a significant aspect of modern warfare. These aerial attacks utilize unmanned aerial vehicles (UAVs), commonly known as drones, to target specific locations or individuals with precision-guided munitions. ',
		contentPosition: 'l',
		image:
			'https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
]

export default function ColumnFeatures() {
	const [featureInView, setFeatureInView] = useState<FeatureType>(features[0])

	return (
		<section className="relative mx-auto max-w-7xl">
			<SlidingFeatureDisplay featureInView={featureInView} />

			{/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
			<div className="-mt-[100vh] hidden md:block" />

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
					stiffness: 400,
					damping: 25,
				}}
				className="h-fit w-3/5 rounded-xl p-8"
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
			<div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
				>
					<span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
						{featureInView.callout}
					</span>
					<p className="my-3 text-5xl font-bold">{featureInView.title}</p>
					<p className="text-slate-600">{featureInView.description}</p>
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

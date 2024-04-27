'use client'
import React, { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Statistics() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
			<h2 className="mb-8 text-center text-base text-indigo-900 sm:text-lg md:mb-16">
				Impact of <span className="text-yellow-800"> Drones</span> on{' '}
				Warfare
			</h2>

			<div className="flex flex-col items-center justify-center sm:flex-row">
				<Stat
					num={1.0}
                    decimals={1}
					suffix="M+"
					subheading="drones Ukraine is aiming to make in 2024"
				/>
				<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
				<Stat
					num={50}
					decimals={0}
					suffix="K+"
					subheading="FPV drones the Ukrainian army is acquiring per month"
				/>
				<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
				<Stat
					num={20.21}
					suffix="B+"
					subheading="The Global Military Drone Market value"
				/>
			</div>
		</div>
	)
}

interface Props {
	num: number
	suffix: string
	decimals?: number
	subheading: string
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
	const ref = useRef<HTMLSpanElement | null>(null)
	const isInView = useInView(ref)

	useEffect(() => {
		if (!isInView) return

		animate(0, num, {
			duration: 2.5,
			onUpdate(value) {
				if (!ref.current) return

				ref.current.textContent = value.toFixed(decimals)
			},
		})
	}, [num, decimals, isInView])

	return (
		<div className="flex w-72 flex-col items-center py-8 sm:py-0">
			<p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
				<span ref={ref}></span>
				{suffix}
			</p>
			<p className="max-w-48 text-center text-neutral-600">{subheading}</p>
		</div>
	)
}

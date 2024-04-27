'use client'
import React, { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Statistics() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
			<h2 className="mb-8 text-center text-base text-indigo-900 sm:text-lg md:mb-16">
				Impact of <span className="text-indigo-500"> Military Drones</span> on{' '}
				Warfare
			</h2>

			<div className="flex flex-col items-center justify-center sm:flex-row">
				<Stat
					num={60.5}
                    decimals={1}
					suffix="K+"
					subheading="casualties from drone strikes each year"
				/>
				<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
				<Stat
					num={25.7}
					decimals={1}
					suffix="K+"
					subheading="active military drones deployed worldwide"
				/>
				<div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
				<Stat
					num={35}
					suffix="B+"
					subheading="estimated market value (in USD) by 2025"
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

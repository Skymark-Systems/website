import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ReactNode } from 'react'
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col">
			<Navbar />
			<div>{children}</div>
		</div>
	)
}

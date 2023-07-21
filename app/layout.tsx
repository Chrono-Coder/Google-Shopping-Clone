import Sidebar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

export const metadata: Metadata = {
	title: 'PC Component Scraper',
	description: 'Amazon web-scraper to get PC Parts.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				{/* Sidebar */}
				{/* <Sidebar /> */}

				<main className=''>
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}

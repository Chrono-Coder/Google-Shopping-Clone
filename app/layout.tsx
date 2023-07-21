import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
	title: 'Google Shops Clone',
	description: 'Google Shops Web-scraper',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<main className=''>
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
	return (
		<div className='flex md:px-5'>
			<div className='space-y-5 w-36 md:w-64'>
				{/* sidebar */}
				{[...Array(4)].map((_, i) => (
					<div
						key={i}
						className='p-5 border rounded-r-lg md:rounded-lg'
					>
						<h2 className='font-bold'>
							<Skeleton />
						</h2>
						<Skeleton count={Math.floor(Math.random() * 5) + 1} />
					</div>
				))}
			</div>

			{/* main  */}
			<div className='flex-1 px-5 py-0 space-y-5 md:p-10'>
				<div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					<div className='px-5 py-5 pb-2 text-xl font-semibold md:col-span-2 lg:col-span-3 xl:col-span-4'>
						<h1>Loading Results From Google...</h1>
						<h2 className='text-base text-blue-500 font-extralight animate-pulse'>
							Scraping Results Via Oxylabs!
						</h2>
					</div>
					{[...Array(12)].map((_) => (
						<div className='p-5 border rounded-2xl'>
							<Skeleton count={2} />
							<br />
							<Skeleton count={1} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

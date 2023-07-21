import Link from 'next/link';

export default function Home() {
	const searches = [
		{
			id: 1,
			term: 'Headphones above $200',
			url: '/search/headphones?sort_by=r&min_price=200',
			color: 'bg-red-700',
		},
		{
			id: 2,
			term: '4K TVs',
			url: '/search/4k tvs??sort_by=r',
			color: 'bg-blue-600',
		},
		{
			id: 3,
			term: '3060 Ti',
			url: '/search/3060 ti?sort_by=r',
			color: 'bg-green-500',
		},
		{
			id: 4,
			term: 'DDR 5 RAM Corsair',
			url: '/search/ddr5 ram corsair?sort_by=r',
			color: 'bg-yellow-700',
		},
		{
			id: 5,
			term: 'Gaming Laptops',
			url: '/search/gaming laptops?sort_by=r',
			color: 'bg-purple-700',
		},
		{
			id: 6,
			term: 'Airpods Pro',
			url: '/search/airpods pro?sort_by=r',
			color: 'bg-pink-700',
		},
		{
			id: 7,
			term: 'Gaming Chairs under $400',
			url: '/search/gaming chairs?sort_by=r&max_price=400',
			color: 'bg-indigo-700',
		},
	];
	return (
		<div className='p-10 pt-0 text-center md:text-left'>
			<h1 className='mb-5 text-3xl font-extralight'>
				Welcome to a Google Shopping Clone
			</h1>
			<h2 className='mb-5 font-medium'>
				Get started by clicking on of the example search items or typing a
				product into the search bar.
			</h2>
			<div className='grid items-center justify-center grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				{searches.map((search) => (
					<Link
						key={search.id}
						href={search.url}
						prefetch={false}
						className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
					>
						{search.term}
					</Link>
				))}
			</div>
		</div>
	);
}

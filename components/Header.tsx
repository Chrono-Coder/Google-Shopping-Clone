'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Logo from '@/public/logo.png';
import SearchButton from './SearchButton';
import {
	SearchSelect,
	SearchSelectItem,
	Select,
	SelectItem,
} from '@tremor/react';
import Avatar from 'react-avatar';
import { useParams, useRouter } from 'next/navigation';

const SORT_BY_MAP = {
	r: 'Default',
	rv: 'By Review',
	p: 'Price: Low to High',
	pd: 'Price: High to Low',
};

export default function Header() {
	const router = useRouter();
	const { term } = useParams();
	const [pages, setPages] = useState('');
	const [sortBy, setSortBy] = useState('r');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [searchTerm, setSearchTerm] = useState(
		term ? term.toString().replace('%20', ' ') : ''
	);

	function handleSearch(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!searchTerm) return;
		const params = new URLSearchParams();
		if (pages) params.set('pages', pages.toString());
		if (sortBy) params.set('sort_by', sortBy.toString());
		if (minPrice) params.set('min_price', minPrice.toString());
		if (maxPrice) params.set('max_price', maxPrice.toString());

		router.push(`/search/${searchTerm}?${params.toString()}`);
	}
	return (
		<header className='flex flex-col items-center px-2 pt-10 pb-5 md:p-10 md:pb-5 md:flex-row md:items-start md:space-x-6'>
			<Link href='/'>
				{/* <DocumentMagnifyingGlassIcon className='h-16 text-indigo-600 md:w-16' /> */}
				<Image
					src={Logo}
					alt='logo'
					width={150}
					height={150}
					className='object-contain'
				></Image>
			</Link>
			<div className='w-full md:max-w-2xl'>
				<form onSubmit={handleSearch}>
					<div className='flex items-center w-full gap-2 px-4'>
						<div className='flex items-center justify-center flex-1 px-6 py-4 space-x-2 bg-white border-0 rounded-full shadow-xl '>
							<MagnifyingGlassIcon className='w-5 h-5 text-gray-400'></MagnifyingGlassIcon>
							<input
								autoComplete='off'
								type='text'
								placeholder='Search...'
								name='searchTerm'
								className='flex-1 bg-transparent outline-none'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<SearchButton />
					</div>
					<div className='grid items-center max-w-lg grid-cols-2 gap-2 p-4 mx-auto md:grid-cols-4 md:max-w-none'>
						<SearchSelect
							className='min-w-4'
							placeholder='# of pages'
							onValueChange={(v) => setPages(v)}
						>
							{[...Array(100)].map((_, i) => (
								<SearchSelectItem
									key={i}
									value={(i + 1).toString()}
								>
									{(i + 1).toString()} pages
								</SearchSelectItem>
							))}
						</SearchSelect>
						<Select
							className='min-w-4'
							placeholder='Sort'
							onValueChange={(v) => setSortBy(v)}
						>
							{Object.entries(SORT_BY_MAP).map(([key, value]) => (
								<SelectItem
									key={key}
									value={key}
								>
									{value}
								</SelectItem>
							))}
						</Select>
						<SearchSelect
							placeholder='Min Price...'
							className='min-w-4'
							onValueChange={(v) => setMinPrice(v)}
						>
							{['', '100', '250', '500', '750', '900', '1000'].map((_, i) => (
								<SearchSelectItem
									key={i}
									value={_.toString()}
								>
									{i === 0 ? 'No Minimum' : `$${_.toString()}`}
								</SearchSelectItem>
							))}
						</SearchSelect>
						<SearchSelect
							placeholder='Max Price...'
							className='min-w-4'
							onValueChange={(v) => setMaxPrice(v)}
						>
							{['', '100', '250', '500', '750', '900', '1000+'].map((_, i) => (
								<SearchSelectItem
									key={i}
									value={_.toString()}
								>
									{i === 0 ? 'No Maximum' : `$${_.toString()}`}
								</SearchSelectItem>
							))}
						</SearchSelect>
					</div>
				</form>
			</div>
			<div className='justify-end flex-1 hidden lg:flex'>
				<Avatar
					name='Peter-John Hein'
					round
					size='50'
				></Avatar>
			</div>
		</header>
	);
}

'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
export default function SearchButton() {
	const { pending } = useFormStatus();

	return (
		<button className='p-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'>
			{pending && 'Searching...'}
			{!pending && (
				<MagnifyingGlassIcon className='w-5 h-5 '></MagnifyingGlassIcon>
			)}
		</button>
	);
}

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center space-y-5'>
			<h1 className='text-4xl font-bold'>Whoops...</h1>
			<h2 className='animate-pulse font-extralight'>
				We couldn&apos;t find the product you were looking for.
			</h2>
		</div>
	);
}

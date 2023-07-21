import { redirect } from 'next/navigation';
import { PageResult, SearchParams } from '@/typings';
import { getFetchUrl } from '@/lib/getFetchUrl';
import ResultsList from '@/components/ResultsList';

export const revalidate = 360; // 6 minutes

type Props = {
	searchParams: SearchParams;
	params: {
		term: string;
	};
};

export default async function Search({
	searchParams,
	params: { term },
}: Props) {
	if (!term) {
		redirect('/');
	}

	const response = await fetch(getFetchUrl('api/search'), {
		method: 'POST',
		body: JSON.stringify({ searchTerm: term, ...searchParams }),
	});

	const results = (await response.json()) as PageResult[];

	console.log(results);

	return (
		<div>
			<ResultsList
				results={results}
				term={term}
			/>
		</div>
	);
}

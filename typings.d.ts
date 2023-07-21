export type SearchParams = {
	sortBy: string;
	pages?: string;
	minPrice?: string;
	maxPrice?: string;
};

export type PageResult = {
	content: Content;
	created_at: string;
	updated_at: string;
	page: number;
	url: string;
	job_id: string;
	status_code: number;
	parser_type: string;
};

type Content = {
	url: string;
	page: number;
	results: Results;
	last_visible_page: number;
	parse_status_code: number;
};

type Results = {
	paid: any[];
	filters: Filter[];
	organic: Organic[];
	search_information: {
		query: string;
		showing_results_for: string;
	};
};

type Filter = {
	name: string;
	values: Value[];
};

type Value = {
	value: string;
	url: string;
};

type Organic = {
	title: string;
	pos: number;
	url: string;
	type: string;
	price: number;
	currency: string;
	merchant: {
		name: string;
		url: string;
	};
	price_str: string;
	pos_overall: number;
};

type ProductData = {
	content: ProductContent;
	created_at: string;
	updated_at: string;
	url: string;
	job_id: string;
	status_code: number;
	parser_type: string;
	page: number;
};
type ProductContent = {
	url: string;
	title: string;
	description: string;
	images: {
		full_size: string[];
		thumbnails: string[];
	};
	highlights?: string[];
	reviews: {
		rating: number;
		top_review: {
			text: string;
			rating: number;
			title: string;
			author: string;
			source: string;
		};
		rating_stars: number;
		reviews_count: number;
		reviews_by_stars: {
			[starRating]: {
				url: string;
				reviews_count: number;
			};
		};
	};
	pricing: {
		online: [
			{
				price: number;
				currency: string;
				seller: string;
				details: string;
				condition: string;
				price_tax: number;
				price_shipping: number;
				price_total: number;
				seller_link: string;
			}
		];
	};
	specifications: [
		{
			items: [
				{
					title: string;
					value: string;
				}
			];
			section_title: string;
		}
	];
	variants: Variant[];
};

import { StaticImageData } from 'next/image';

export type PageProps = {
	params: {
		slug: string;
	};
};
export type ReadMoreItem = {
	id: string;
	slug: string;
	title: string;
	summery: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
};

export type AuthorReferenceProps = {
	slug: string;
	image: { url: string };
	name: string;
	linkedin: string;
	bio: string;
};

export type AuthorsProps = {
	authorReference: AuthorReferenceProps;
	authorSecondary: AuthorReferenceProps | null;
};

export type ArticleProps = {
	post: {
		title: string;
		summery: string;
		date: string;
		image: { url: string; width: number; height: number };
		tags: { id: string; name: string; slug: string }[];
		authorReference: AuthorReferenceProps;
		authorSecondary: AuthorReferenceProps | null;
		titleBottom: string | null;
		titleTop: string | null;
		richText: {
			html: string;
		};
		removeToc: boolean | null;
		asideButtonLink: string;
		asideButtonText: string;
		asideTitle: string;
		asideIcon: {
			url: string;
		};
		slug: string;
	};
	readMore?: ReadMoreItem;
};
export interface Author {
	name: string;
	slug: string;
}
export interface BlogPost {
	id: string;
	title: string;
	articleType?: string;
	image: {
		url: string;
	};
	createdAt: string;
	updatedAt: string;
	authorReference: Author;
}
export interface SchemaProps {
	post: BlogPost;
	slug: string;
	logo: StaticImageData;
}

// import { notFound } from 'next/navigation';
// import { getMax3PostsCards, getMembersTotalNumber, getPostDetails } from '@/lib/services/index';
// import Article from '@/components/blog-slug/Article';
// import SectionCTA from '@/components/SectionCTA';
// import { generateBlogPostMetadata } from '@/lib/post-page/metadata-generator';
// import SectionDotsBackground from '@/components/SectionDotsBackground';
import '@/styles/post/style.css';

// type PageProps = { params: { slug: string } };

// export const generateMetadata = async ({ params }: PageProps) => {
// 	return generateBlogPostMetadata({ params, getPostDetails });
// };

export default async function PostPage() {
// { params: { slug } }: PageProps
	// const memberNumber = await getMembersTotalNumber();
	// const postD = await getPostDetails(slug);
	// const postData = postD[0];
	// const readMoreData = await getMax3PostsCards(postData.id, postData.tags);

	// if (!postD || !postData) notFound();

	return (
		<div>
			{/* <h1>{slug}</h1> */}
			{/* <Article post={postData} readMore={readMoreData || []} />
			<SectionCTA memberNumber={memberNumber} />
			<SectionDotsBackground /> */}
		</div>
	);
}

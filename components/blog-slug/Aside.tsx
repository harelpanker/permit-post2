import { FC } from 'react';
import AsideTags from './AsideTags';
import AsideSlider from './AsideSlider';
import AsideCTA from './AsideCTA';
import { ArticleProps } from '@/lib/types/post-page/page-props';

const Aside: FC<ArticleProps> = ({ post, readMore }) => {
	return (
		<div className='relative lg:col-span-2'>
			<div className='sticky top-24 flex flex-col gap-y-12 overflow-y-auto pb-12 lg:max-h-[calc(100dvh-6rem)] lg:pb-24'>
				{post.tags.length > 0 ? <AsideTags tags={post.tags} /> : null}
				<AsideSlider readMore={readMore} />
				<AsideCTA />
			</div>
		</div>
	);
};

export default Aside;

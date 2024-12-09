import { FC } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import { ArticleProps } from '@/lib/types/post-page/page-props';

const Article: FC<ArticleProps> = ({ post, readMore }) => {
	return (
		<article className='relative z-20'>
			<ArticleHeader post={post} />
			<ArticleBody post={post} readMore={readMore} />
		</article>
	);
};

export default Article;

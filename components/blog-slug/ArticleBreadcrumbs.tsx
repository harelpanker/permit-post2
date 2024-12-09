import { FC } from 'react';
import Link from 'next/link';
import styles from '@/styles/post/styles.module.css';

type ArticleBreadcrumbsProps = { postName: string };

const ArticleBreadcrumbs: FC<ArticleBreadcrumbsProps> = ({ postName }) => {
	return (
		<div className='flex flex-wrap gap-2 text-sm font-medium'>
			<a
				href='https://www.permit.io/'
				target='_blank'
				rel='noreferrer noopener'
				className={`${styles.breadcrumbsLink}`}>
				Home
			</a>
			/
			<a
				href='https://www.permit.io/blog'
				target='_blank'
				rel='noreferrer noopener'
				className={`${styles.breadcrumbsa}`}>
				Blog
			</a>
			/<div className={`${styles.breadcrumbsLink} pointer-events-none`}>{postName}</div>
		</div>
	);
};

export default ArticleBreadcrumbs;

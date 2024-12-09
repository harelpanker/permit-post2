'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import RemoteImage from '@/components/ui/RemoteImage';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import ArticleBreadcrumbs from './ArticleBreadcrumbs';
import { format } from 'date-fns';
import { ArticleProps } from '@/lib/types/post-page/page-props';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import styles from '@/styles/post/styles.module.css';
import linkedin from '@/public/images/post-page/linkedin.svg';
import facebook from '@/public/images/post-page/facebook.svg';
import twitter from '@/public/images/post-page/twitter.svg';

const ArticleHeader: FC<ArticleProps> = ({ post }) => {
	const pathname = usePathname();
	const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
	const slug = `${origin}${pathname}`;
	return (
		<Section className='pb-6 pt-20 lg:pb-12 lg:pt-32'>
			<Container className='flex max-w-screen-lg flex-col gap-y-10'>
				<ArticleBreadcrumbs postName={post.title} />
				<header className='flex flex-col gap-y-6 text-_451E11 lg:gap-y-10'>
					<div className='flex w-full max-w-screen-md flex-col gap-y-3 lg:gap-y-4'>
						<Title size={36}>
							<h1>{post.title}</h1>
						</Title>
						<Text size={18}>{post.summery}</Text>
					</div>
					<figure>
						<RemoteImage
							styles='rounded-xl'
							src={post.image.url}
							alt={post.title}
							width={post.image.width}
							height={post.image.height}
							priority
						/>
					</figure>

					{/* time to read, author name, share options */}
					<div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-_451E11/50 pb-6'>
						<div className='flex flex-col gap-y-1'>
							<div className='flex flex-wrap items-center gap-2'>
								<Link className='flex items-center gap-x-2' href={`/author/${post.authorReference.slug}`}>
									<RemoteImage
										styles='rounded-full shrink-0'
										src={post.authorReference.image.url}
										alt={post.authorReference.name}
										width={42}
										height={42}
										priority
									/>
									<Text styles='font-semibold' size={14}>
										<p>{post.authorReference.name}</p>
									</Text>
								</Link>

								{post.authorSecondary && post.authorSecondary?.name ? (
									<>
										<Text styles='font-semibold' size={14}>
											<p>&</p>
										</Text>
										<Link className='flex items-center gap-x-2' href={`/author/${post.authorSecondary?.slug}`}>
											<RemoteImage
												styles='rounded-full shrink-0'
												src={post.authorSecondary.image.url}
												alt={post.authorSecondary.name}
												width={42}
												height={42}
												priority
											/>
											<Text styles='font-semibold' size={14}>
												<p>{post.authorSecondary.name}</p>
											</Text>
										</Link>
									</>
								) : null}

								<div>|</div>
								<Text size={14}>
									<time dateTime={`${post.date}`}>{format(new Date(post.date), 'MMM d yyyy')}</time>
								</Text>
							</div>
						</div>
						<ul className={`${styles.share_ul} flex items-center gap-x-3`}>
							<li style={{ width: 'auto', height: 'auto', opacity: 1 }}>Share:</li>
							<li>
								<LinkedinShareButton url={slug}>
									<Image src={linkedin} alt='linkedin' width={24} height={24} />
								</LinkedinShareButton>
							</li>
							<li>
								<FacebookShareButton url={slug}>
									<Image src={facebook} alt='facebook' width={24} height={24} />
								</FacebookShareButton>
							</li>
							<li>
								<TwitterShareButton url={slug}>
									<Image src={twitter} alt='twitter' width={20} height={20} />
								</TwitterShareButton>
							</li>
						</ul>
					</div>
				</header>
			</Container>
			<div className='from-fdf3ec to-fdf3ec/0 absolute bottom-0 left-0 z-10 h-[65%] w-full bg-gradient-to-t'></div>
		</Section>
	);
};

export default ArticleHeader;

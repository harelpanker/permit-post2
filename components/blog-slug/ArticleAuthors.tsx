import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { AuthorsProps } from '@/lib/types/post-page/page-props';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type AuthorProps = {
	src: string;
	name: string;
	bio: string;
	slug: string;
};

const Author = ({ src, name, bio, slug }: AuthorProps) => {
	return (
		<div className='flex flex-col gap-y-4'>
			<div className='flex flex-col items-start gap-x-3 gap-y-3 md:flex-row md:items-center'>
				<figure className='relative size-24 shrink-0 overflow-hidden rounded-full'>
					<Image className='h-full w-full object-cover' src={src} width={100} height={100} alt={name} />
				</figure>
				<div className='flex flex-col gap-y-1'>
					<Title size={18}>
						<h3>{name}</h3>
					</Title>
					<Text size={14}>
						<p>{bio}</p>
					</Text>
				</div>
			</div>
			<div className='flex'>
				<Button asChild variant={'link'}>
					<Link href={`/author/${slug}`} className='group/arrow h-auto !p-0 transition duration-300 hover:no-underline'>
						<span className='font-medium'>Read More from {name.split(' ')[0]}</span>
						<MoveRight size={16} className='transition group-hover/arrow:translate-x-1' />
					</Link>
				</Button>
			</div>
		</div>
	);
};

const ArticleAuthors: FC<AuthorsProps> = ({ authorReference, authorSecondary }) => {
	return (
		<div className='flex flex-col gap-y-12 pt-16'>
			<div className='flex flex-col gap-y-2'>
				<div className='bg-theme_orange_12 h-1 w-9'></div>
				<Title size={26}>
					<h2>Written by</h2>
				</Title>
			</div>
			{/* author 1 */}
			<Author
				src={authorReference.image.url}
				name={authorReference.name}
				bio={authorReference.bio}
				slug={authorReference.slug}
			/>

			{/* author 2 */}
			{authorSecondary ? (
				<Author
					src={authorSecondary.image.url}
					name={authorSecondary.name}
					bio={authorSecondary.bio}
					slug={authorSecondary.slug}
				/>
			) : null}
		</div>
	);
};

export default ArticleAuthors;

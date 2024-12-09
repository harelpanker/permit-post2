import Image, { StaticImageData } from 'next/image';
import Text from '@/components/ui/Text';

import github from '@/public/images/post-page/github.svg';
import slack from '@/public/images/post-page/slack.svg';
import pen from '@/public/images/post-page/pen.svg';

type AsideLinkProps = {
	href: string;
	src: StaticImageData;
	text: string;
};

const AsideLink = ({ href, src, text }: AsideLinkProps) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noreferrer noopener'
			className='flex items-center gap-1 text-[#43302B] transition duration-300 hover:opacity-60'>
			<span className='pointer-events-none'>{text}</span> <Image className='pointer-events-none' src={src} alt='' />
		</a>
	);
};

const AsideCTA = () => {
	return (
		<div className='order-first mx-auto flex w-full max-w-3xl flex-col flex-wrap justify-between gap-x-10 gap-y-4 rounded-2xl bg-[#FFE8D7] p-6 font-medium text-[#A18072] sm:flex-row lg:order-last'>
			<div className='flex flex-col gap-y-1'>
				<Text size={16}>
					<p>Like this Article?</p>
				</Text>
				<AsideLink href='https://github.com/permitio' src={github} text='Star us on Github' />
			</div>
			<div className='flex flex-col gap-y-1'>
				<Text size={16}>
					<p>Disagree?</p>
				</Text>
				<AsideLink href='https://io.permit.io/blog-slack' src={slack} text='Tell us why' />
			</div>
			<div className='flex flex-col gap-y-1'>
				<Text size={16}>
					<p>Want more?</p>
				</Text>
				<AsideLink href='https://io.permit.io/blogstack' src={pen} text='Join our Substack' />
			</div>
		</div>
	);
};

export default AsideCTA;

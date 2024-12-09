import Image from 'next/image';
import { useWindowScroll } from '@mantine/hooks';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { socialMediaLink } from '@/lib/navbar-links';

const DesktopMenu = () => {
	const ctaLink = 'https://app.permit.io/';
	const [data, setData] = useState<Array<string | void | undefined>>([]);
	const [scroll] = useWindowScroll();

	useEffect(() => {
		const fetchData = async () => {
			const dataFetchers = socialMediaLink.map(({ data }) => data || (async () => {}));
			const d = await Promise.all(dataFetchers.map((fetcher) => fetcher()));
			setData(d);
		};
		fetchData();
	}, []);

	return (
		<div className='flex items-center gap-6'>
			<div className='flex items-center gap-2'>
				{socialMediaLink.map((link, index) => (
					<a
						key={link.id}
						className={`${link.id === 2 ? 'slack_header' : ''} flex h-10 ${
							data[index] ? 'pl-2 pr-3 shadow-[inset_-2.8rem_0px_0_rgb(255,255,255,.3)]' : 'w-10'
						} items-center justify-center rounded-full border-2 border-[#D1B9B0] bg-[#FFF1E7] transition duration-300 hover:border-[#BFA094] hover:bg-[#FFCCA7]`}
						target='_blank'
						rel='noreferrer'
						href={link.link}>
						<Image src={link.icon} alt={link.name} className='pointer-events-none flex' />
						{typeof data[index] === 'string' && <span className='pl-3'>{data?.[index]?.toString() || ''}</span>}
					</a>
				))}
			</div>
			<div className={`flex items-center gap-2`}>
				<Button variant='outline' asChild>
					<a href={ctaLink}>Sign In</a>
				</Button>
				<Button
					className={`${
						scroll.y > 400 ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
					} duration-300`}
					variant='default'
					asChild>
					<a href={ctaLink}>Start Now</a>
				</Button>
			</div>
		</div>
	);
};

export default DesktopMenu;

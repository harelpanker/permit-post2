'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

import dog from '@/public/images/cta/dog.svg';
import slack from '@/public/images/icons/slack.svg';

type CTAProps = {
	memberNumber: number;
};

const SectionCTA = ({ memberNumber }: CTAProps) => {
	const slackLink = 'https://io.permit.io/slack';

	return (
		<section className='relative z-10 bg-[#FFDCC3] px-5 py-[5.25rem] lg:py-24'>
			<div className='container mx-auto flex max-w-6xl flex-col gap-24'>
				{/* cta top */}
				<div className='flex flex-col items-center justify-center gap-[70px] lg:flex-row'>
					<header className='flex w-full max-w-[486px] flex-col items-center gap-6 text-center lg:items-start lg:text-left'>
						<h2 className='text-theme_orange_12 font-poppins text-4xl font-semibold lg:text-5xl'>
							<span className='block'>Test in minutes, </span>go to prod in days.
						</h2>
						<Button asChild>
							<a href='https://app.permit.io/'>Get Started Now</a>
						</Button>
					</header>
					<figure>
						<Image src={dog} alt='' />
					</figure>
				</div>

				{/* cta bottom */}
				<div className='text-theme_orange_12 mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-6 rounded-3xl bg-[#FFCCA7] px-6 py-12 text-center lg:max-w-full lg:flex-row lg:items-start lg:gap-[90px] lg:px-12 lg:text-left'>
					<div className='flex flex-col items-center gap-3 font-poppins lg:items-start'>
						<h3 className='text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>Join our Community</h3>
						<p className='font-poppins text-lg font-semibold text-[#846358]'>{memberNumber} Members</p>
					</div>
					<div className='h-[2px] w-full bg-[#FFB381] lg:h-36 lg:w-[2px]' />
					<div className='flex w-full max-w-[324px] flex-col items-center gap-6 lg:items-start lg:pt-3'>
						<h4 className='font-poppins text-lg font-semibold tracking-[-0.5px]'>
							<span className='lg:block'>Get support from our experts, </span>
							Learn from fellow devs
						</h4>
						<Button asChild variant='outline' className='pl-3'>
							<a target='_blank' rel='noopener noreferrer' className='slack_cta_section' href={slackLink}>
								<Image className='pointer-events-none' width={24} height={24} src={slack} alt='' />{' '}
								<span className='pointer-events-none'>Join Permit&apos;s Slack</span>
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionCTA;

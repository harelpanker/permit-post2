import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/ui/Title';
import { ReadMoreItem } from '@/lib/types/post-page/page-props';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import '@/styles/post/pagination.css';

type AsideSliderProps = {
	readMore: ReadMoreItem | undefined;
};

const AsideSlider: FC<AsideSliderProps> = ({ readMore }) => {
	return (
		<div className='slider_wrapper flex flex-col gap-y-3'>
			<Title size={18}>
				<h2>More to read</h2>
			</Title>
			{readMore ? (
				<Splide
					options={{
						type: 'loop',
						width: '100%',
						arrows: false,
						autoplay: true,
						easing: 'cubic-bezier(.22,.48,.23,.92)',
						interval: 8500,
						speed: 800,
						perMove: 1,
						perPage: 1,
						gap: '8%',
						pagination: true,
					}}
					tag='div'
					aria-label='Posts'>
					{Array.isArray(readMore) &&
						readMore.map((slide: ReadMoreItem) => (
							<SplideSlide key={slide.id}>
								<Link className='group flex flex-col gap-y-3' href={`/blog/${slide.slug}`}>
									<figure className='relative aspect-video overflow-hidden rounded-md'>
										<Image
											className='h-full w-full object-cover transition duration-300 group-hover:scale-110'
											src={slide.image.url}
											width={slide.image.width}
											height={slide.image.height}
											alt={slide.title}
										/>
									</figure>
									<article className='flex flex-col gap-y-2'>
										<Title size={18}>
											<h3>{slide.title}</h3>
										</Title>
										{/* <Text size={14} styles='line-clamp-3'>{slide.summery}</Text> */}
									</article>
								</Link>
							</SplideSlide>
						))}
				</Splide>
			) : null}
		</div>
	);
};

export default AsideSlider;

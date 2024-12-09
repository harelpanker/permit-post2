import Image from 'next/image';
import ProductHuntButton from '@/components/ui/ProductHuntButton';

import hipaaLogo from '@/public/images/footer/hipaa.svg';
import isoLogo from '@/public/images/footer/iso.svg';
import socLogo from '@/public/images/footer/soc.svg';

const Certified = () => {
	return (
		<div className='flex flex-col items-center gap-2'>
			<div className='flex items-center justify-center'>
				<ProductHuntButton />
			</div>
			<h3 className='text-center text-sm font-bold uppercase'>Certifications & Compliance</h3>
			<ul className='flex items-center justify-center gap-6 lg:justify-between'>
				<li className='max-h-14'>
					<Image src={hipaaLogo} alt='HIPAA logo' height={36} />
				</li>
				<li className='relative max-h-14'>
					<Image src={socLogo} alt='SOC logo' height={36} />
				</li>
				<li className='relative max-h-14'>
					<Image src={isoLogo} alt='ISO logo' height={36} />
					<div className='absolute -bottom-4 left-1/2 top-auto flex -translate-x-1/2 items-center justify-center text-[.6rem] font-semibold opacity-70'>
						Pending
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Certified;

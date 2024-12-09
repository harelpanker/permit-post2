import { ChevronDown } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { navLinks } from '@/lib/navbar-links';

const NavbarDesktop = () => {
	return (
		<nav className='hidden items-center justify-center gap-6 xl:flex 2xl:w-full'>
			<ul className='group flex items-center gap-2'>
				{navLinks.map((link) => (
					<li className='flex items-center justify-center font-medium' key={link.id}>
						{link.isDrop ? (
							<HoverCard closeDelay={0} openDelay={0}>
								<HoverCardTrigger asChild>
									<button className='group flex items-center gap-2 px-2 py-2 font-medium text-[#43302B] transition hover:text-_974EF2'>
										{link.name} <ChevronDown className={`h-4 w-4 transition group-data-[state=open]:rotate-180`} />
									</button>
								</HoverCardTrigger>
								<HoverCardContent className='-top-10 mt-0 w-auto border-none bg-transparent p-0 pt-1'>
									<ul
										style={{
											boxShadow: '0px 11px 15px 0px rgba(0, 0, 0, 0.20)',
										}}
										className='grid w-[200px] rounded border border-[#EADDD7] bg-[#FEF8F4] py-2 font-medium'>
										{link.links &&
											link.links.map((l: { id: number; name: string; link: string }) => (
												<li key={l.id} className='grid w-full'>
													<>
														<a
															target='_blank'
															rel='noreferrer'
															className={`w-full p-4 transition hover:bg-[#F3E7FC] hover:text-[#7011E4]`}
															href={l.link}>
															{l.name}
														</a>
													</>
												</li>
											))}
									</ul>
								</HoverCardContent>
							</HoverCard>
						) : (
							<a
								rel='noopener noreferrer'
								target='_blank'
								href={`${link.link && link.link}`}
								className='px-2 py-2 transition hover:text-_974EF2'>
								{link.name}
							</a>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavbarDesktop;

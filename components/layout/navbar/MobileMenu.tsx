import { FC } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link';
import { useWindowScroll } from '@mantine/hooks';
import { navLinks } from '@/lib/navbar-links';
import { Button } from '@/components/ui/button';

type MobileMenuProps = {
	handleOpen: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ handleOpen }) => {
	const [scroll] = useWindowScroll();
	return (
		<ul className='flex h-full flex-col justify-between gap-8'>
			<li>
				<nav>
					<ul className='flex flex-col gap-8'>
						{navLinks.map((link) => (
							<li className='text-xl font-medium' key={link.id} onClick={handleOpen}>
								{link.isDrop ? (
									<Popover>
										<PopoverButton>{link.name}</PopoverButton>
										<PopoverPanel className='mt-2 grid rounded border border-[#EADDD7] bg-[#FEF8F4] py-2 font-medium'>
											{link.links &&
												link.links.map((l: { id: number; name: string; link: string }) => (
													<Link
														key={l.id}
														href={l.link}
														className={`w-full p-4 transition hover:bg-[#F3E7FC] hover:text-_7011E4`}>
														{l.name}
													</Link>
												))}
										</PopoverPanel>
									</Popover>
								) : (
									<>
										{!link.external && <Link href={`${link.link && link.link}`}>{link.name}</Link>}
										{link.external && (
											<a target='_blank' rel='noreferrer' href={`${link.link && link.link}`}>
												{link.name}
											</a>
										)}
									</>
								)}
							</li>
						))}
					</ul>
				</nav>
			</li>
			<li className='flex w-full justify-center'>
				<Button
					className={`${
						scroll.y > 400 ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
					} duration-300`}
					variant='default'
					asChild>
					<a href='https://app.permit.io/'>Start Now</a>
				</Button>
			</li>
		</ul>
	);
};

export default MobileMenu;

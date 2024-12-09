import { FC } from 'react';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';

type TableOfContentsProps = {
	toc: { id: string; title: string }[];
};

const TableOfContents: FC<TableOfContentsProps> = ({ toc }) => {
	return (
		<Disclosure as='div' className='mb-6 flex flex-col gap-y-3 text-lg' defaultOpen={false}>
			<DisclosureButton className='bg-theme_orange_12/5 group flex w-full items-center justify-between rounded-2xl p-5 font-medium'>
				<span>Table of Contents</span>
				<ChevronDownIcon className='size-6 transition duration-300 group-data-[open]:rotate-180' />
			</DisclosureButton>
			<DisclosurePanel
				transition
				className='origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0'>
				<ul className='flex flex-col gap-y-3 text-base'>
					{toc.map(({ id, title }) => (
						<li key={id}>
							<Link
								className='hover:bg-theme_orange_12/5 flex rounded-lg px-4 py-2 transition duration-300'
								href={`#${id}`}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</DisclosurePanel>
		</Disclosure>
	);
};

export default TableOfContents;

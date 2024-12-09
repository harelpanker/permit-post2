import { FC } from 'react';
import { Dialog, DialogBackdrop } from '@headlessui/react';

type JoinModuleProps = {
	isOpen: boolean;
	closeModal: () => void;
	url?: string;
};

const JoinModule: FC<JoinModuleProps> = ({ isOpen, closeModal, url }) => {
	url = url || 'https://hello.permit.io/newsletter';

	return (
		<Dialog
			open={isOpen}
			as='div'
			transition
			onClose={closeModal}
			className='fixed inset-0 z-50 overflow-y-auto transition duration-300 data-[closed]:opacity-0'>
			<div className='flex min-h-screen items-center justify-center p-4'>
				<DialogBackdrop onClick={() => closeModal()} className='fixed inset-0 bg-_451E11 opacity-50' />

				<div className={`relative w-full max-w-[90vw] rounded bg-white p-4 text-center lg:max-w-screen-md`}>
					<div className='mb-5 flex justify-start'>
						<iframe className='w-full' title='subscribe' src={url} style={{ border: 'none', minHeight: '80vh' }} />
					</div>
				</div>
			</div>
		</Dialog>
	);
};

export default JoinModule;

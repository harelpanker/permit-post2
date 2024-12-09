import { FC } from 'react';

type MenuMobileButtonProps = {
	open: boolean;
	handleOpen: () => void;
};

const MenuMobileButton: FC<MenuMobileButtonProps> = ({ open = false, handleOpen }) => {
	return (
		<button
			onClick={handleOpen}
			aria-label={`${open ? 'close' : 'open'} menu`}
			type='button'
			className='flex h-6 w-6 flex-col justify-around xl:hidden'>
			<div
				className={`h-px w-full bg-_451E11 transition ${
					open ? 'translate-y-[6px] -rotate-45' : 'translate-y-[2px] rotate-0'
				}`}></div>
			<div
				className={`h-px w-full bg-_451E11 transition ${
					open ? '-translate-y-[6px] rotate-45' : '-translate-y-[2px] rotate-0'
				}`}></div>
		</button>
	);
};

export default MenuMobileButton;

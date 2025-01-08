import { createRef } from 'react';

import type { FC } from 'react';

import { MdChangeCircle } from 'react-icons/md';

import { useAppSelector, useAppDispatch } from '@hooks';
import { setTheme } from '@slices';

import type { IToggleThemeButtonProps } from './ToggleThemeButton.interfaces';

export const ToggleThemeButton: FC<IToggleThemeButtonProps> = () => {
	const { theme } = useAppSelector(state => state.ui);
	const dispatch = useAppDispatch();

	const buttonRef = createRef<HTMLButtonElement>();

	const hdlSetTheme = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
	};

	return (
		<button ref={buttonRef} className='w-fit h-fit fixed right-6 bottom-6' onClick={hdlSetTheme}>
			<MdChangeCircle className='text-black dark:text-white text-4xl transition-colors ease-in-out duration-500' />
		</button>
	);
};

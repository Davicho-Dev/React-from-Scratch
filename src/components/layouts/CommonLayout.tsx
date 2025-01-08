import { Outlet } from 'react-router-dom';

import { ToggleThemeButton } from '@atoms';

export const CommonLayout = () => {
	return (
		<div className='w-screen relative'>
			<Outlet />
			<ToggleThemeButton />
		</div>
	);
};

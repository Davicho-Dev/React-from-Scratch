import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages';
import { CommonLayout } from '@layouts';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <CommonLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
]);

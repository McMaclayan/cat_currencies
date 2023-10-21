import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from 'app/index';
import { Main } from 'app/pages/Main';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Main />,
			},
		],
	},
]);

import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const uiMiddleware = (state: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
	next(action);

	if (action.type === 'ui/setTheme') {
		const { theme } = state.getState().ui;

		document.getElementsByTagName('html')[0].setAttribute('class', theme);

		localStorage.setItem('theme', theme);
	}
};

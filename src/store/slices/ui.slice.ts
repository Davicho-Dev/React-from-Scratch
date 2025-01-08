import { IUIState, TTheme } from '@interfaces';
import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IUIState = {
	isLoading: false,
	theme: 'light',
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setLoading: (_state, { payload }: PayloadAction<boolean>) => {
			_state.isLoading = payload;
		},
		setTheme: (_state, { payload }: PayloadAction<TTheme>) => {
			_state.theme = payload;
		},
	},
});

const { setLoading, setTheme } = uiSlice.actions;

export { uiSlice, setLoading, setTheme };

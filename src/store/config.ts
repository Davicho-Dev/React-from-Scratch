import { combineReducers, configureStore } from '@reduxjs/toolkit';

import type { Middleware } from '@reduxjs/toolkit';

import { uiMiddleware } from '@middlewares';
import { uiSlice } from '@slices';

const rootReducer = combineReducers({
	ui: uiSlice.reducer,
});

const middlewares: Middleware[] = [uiMiddleware];

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middlewares),
});

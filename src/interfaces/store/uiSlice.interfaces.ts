interface IUIState {
	isLoading: boolean;
	theme: TTheme;
}

type TTheme = 'light' | 'dark';

export type { IUIState, TTheme };

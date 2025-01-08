import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [react()],
	preview: {
		port: 3000,
	},
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets/index.ts'),
			'@atoms': path.resolve(__dirname, './src/components/atoms/index.ts'),
			'@layouts': path.resolve(__dirname, './src/components/layouts/index.ts'),
			'@molecules': path.resolve(__dirname, './src/components/molecules/index.ts'),
			'@organisms': path.resolve(__dirname, './src/components/organisms/index.ts'),
			'@templates': path.resolve(__dirname, './src/components/templates/index.ts'),
			'@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
			'@interfaces': path.resolve(__dirname, './src/interfaces/index.ts'),
			'@pages': path.resolve(__dirname, './src/pages/index.ts'),
			'@router': path.resolve(__dirname, './src/router/index.ts'),
			'@services': path.resolve(__dirname, './src/services/index.ts'),
			'@middlewares': path.resolve(__dirname, './src/store/middlewares/index.ts'),
			'@query': path.resolve(__dirname, './src/store/query/index.ts'),
			'@slices': path.resolve(__dirname, './src/store/slices/index.ts'),
			'@store': path.resolve(__dirname, './src/store/index.ts'),
			'@utils': path.resolve(__dirname, './src/utils/index.ts'),
		},
	},
});

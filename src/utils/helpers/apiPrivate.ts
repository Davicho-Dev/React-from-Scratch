import axios from 'axios';

import type { AxiosError, AxiosInstance } from 'axios';

export const apiPrivate: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

apiPrivate.interceptors.request.use(
	config => config,
	err => Promise.reject(err),
);

apiPrivate.interceptors.response.use(
	resp => resp,
	async err => {
		const originalConfig = err.config;

		if (err.response) {
			if (err.response.status === 401 && !originalConfig._retry) {
				originalConfig._retry = true;

				try {
					return apiPrivate(originalConfig);
				} catch (error) {
					const err = error as AxiosError;

					localStorage.clear();

					if (err.response && err.response.data) Promise.reject(err.response.data);

					return Promise.reject(err);
				}
			}

			if (err.response.status === 403 && err.response.data) {
				return Promise.reject(err.response.data);
			}

			if (err.response.status === 500 && err.response.data) {
				return;
			}
		}

		return Promise.reject(err);
	},
);

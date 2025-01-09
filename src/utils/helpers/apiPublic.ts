import axios from 'axios';

import type { AxiosInstance } from 'axios';

export const apiPublic: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: false,
});

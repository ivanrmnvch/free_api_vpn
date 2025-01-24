import axios, { AxiosInstance } from 'axios';

export default class Api {
	protected readonly instance: AxiosInstance;

	protected readonly baseURL: string;

	constructor(baseURL: string) {
		this.baseURL = `http://${baseURL}:${process.env.XRAY_MANAGER_PORT}/xm/`;
		this.instance = axios.create({
			baseURL,
			timeout: 60000,
			responseType: 'json',
		});
	}

	async get(url: string, config: any = {}) {
		const { data } = await this.instance.get(url, config);
		return data;
	}

	async post(url: string, body: any = {}, config: any = {}) {
		const { data } = await this.instance.post(url, body, config);
		return data;
	}
}

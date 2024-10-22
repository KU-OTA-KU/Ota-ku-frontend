import axios, {type AxiosRequestConfig, type AxiosResponse} from 'axios';
import {API_CONFIG} from './apiConfig';

interface ApiServiceInterface {
    get<T = any>(url: string, headers?: Record<string, string>): Promise<AxiosResponse<T>>;

    post<T = any>(url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<T>>;

    put<T = any>(url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<T>>;

    patch<T = any>(url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<T>>;

    delete<T = any>(url: string, headers?: Record<string, string>): Promise<AxiosResponse<T>>;
}

class ApiService implements ApiServiceInterface {
    private cachedAuthToken: string | null = null;

    private getApiPrefix(): string {
        return API_CONFIG.BASE_URL;
    }

    private async getAuthToken(): Promise<string | null> {
        if (!this.cachedAuthToken) {
            this.cachedAuthToken = localStorage.getItem(API_CONFIG.LOCAL_STORAGE_TOKEN_KEY);
        }
        return this.cachedAuthToken;
    }

    private getCurrentLocale(): string | null {
        return useCookie(API_CONFIG.LOCALE_KEY).value || null;
    }

    private async getBaseHeaders(): Promise<Record<string, string>> {
        const authToken = await this.getAuthToken();
        const locale = this.getCurrentLocale();

        const headers: Record<string, string> = {};

        if (authToken) {
            headers['Authorization'] = `${API_CONFIG.TOKEN_PREFIX} ${authToken}`;
        }

        if (locale) {
            headers['Accept-Language'] = locale;
        }

        return headers;
    }

    private getAxiosConfig = async (headers?: Record<string, string>): Promise<AxiosRequestConfig> => {
        return {
            baseURL: this.getApiPrefix(),
            timeout: API_CONFIG.TIMEOUT,
            headers: {...(await this.getBaseHeaders()), ...headers}
        };
    };

    private logRequest(method: string, url: string, config: AxiosRequestConfig): void {
        console.log(`[${method}] Requesting ${url} with config`, config);
    }

    private logResponse(response: AxiosResponse): void {
        console.log(`Response [${response.status}] from ${response.config.url}:`, response.data);
    }

    private handleError(error: any): Error {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const message = error.response?.data?.message || error.message;
            console.warn(`API error [${status}]: ${message}`);
            return new Error(`Error ${status}: ${message}`);
        }

        console.warn('An unexpected error occurred.');
        return new Error('Unexpected error');
    }

    public async request<T = any>(method: 'get' | 'post' | 'put' | 'patch' | 'delete', url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        const config = await this.getAxiosConfig(headers);
        this.logRequest(method.toUpperCase(), url, config);

        try {
            const response = await axios({ method, url, data, ...config });
            this.logResponse(response);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async get<T = any>(url: string, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        const config = await this.getAxiosConfig(headers);
        this.logRequest('GET', url, config);

        try {
            const response = await axios.get(url, config);
            this.logResponse(response);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async post<T = any>(url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        if (!data) {
            throw new Error('POST request requires data.');
        }

        const config = await this.getAxiosConfig(headers);
        this.logRequest('POST', url, config);

        try {
            const response = await axios.post(url, data, config);
            this.logResponse(response);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async put<T = any>(url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        if (!data) {
            throw new Error('PUT request requires data.');
        }

        const config = await this.getAxiosConfig(headers);
        this.logRequest('PUT', url, config);

        try {
            const response = await axios.put(url, data, config);
            this.logResponse(response);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async patch<T = any>(url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        if (!data) {
            throw new Error('PATCH request requires data.');
        }

        const config = await this.getAxiosConfig(headers);
        this.logRequest('PATCH', url, config);

        try {
            const response = await axios.patch(url, data, config);
            this.logResponse(response);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async delete<T = any>(url: string, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        const config = await this.getAxiosConfig(headers);
        this.logRequest('DELETE', url, config);

        try {
            const response = await axios.delete(url, config);
            this.logResponse(response);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }
}

export default ApiService;

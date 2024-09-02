import axios, {type AxiosRequestConfig, type AxiosResponse} from 'axios';

interface ApiServiceInterface {
    get(url: string, headers?: Record<string, string>): Promise<any>;

    post(url: string, data?: any, headers?: Record<string, string>): Promise<any>;

    delete(url: string, headers?: Record<string, string>): Promise<any>;
}

class ApiService implements ApiServiceInterface {
    private readonly localStorageItemName: string = 'at';
    private readonly tokenPrefix: string = 'Bearer';
    private readonly localeKey: string = 'user-locale';

    private getApiPrefix(): string {
        return 'http://localhost:8000/api';
    }

    private getAuthToken(): string | null {
        return localStorage.getItem(this.localStorageItemName);
    }

    private getCurrentLocale(): string | null {
        return useCookie(this.localeKey).value || null;
    }

    private getBaseHeaders(): Record<string, string> {
        const authToken = this.getAuthToken();
        const locale = this.getCurrentLocale();

        const headers: Record<string, string> = {};

        if (authToken) {
            headers['Authorization'] = `${this.tokenPrefix} ${authToken}`;
        }

        if (locale) {
            headers['Accept-Language'] = locale;
        }

        return headers;
    }

    public async get(url: string, headers?: Record<string, string>): Promise<AxiosResponse<any>> {
        try {
            const config: AxiosRequestConfig = {
                headers: {...this.getBaseHeaders(), ...headers}
            };
            return await axios.get(this.getApiPrefix() + url, config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async post(url: string, data?: any, headers?: Record<string, string>): Promise<AxiosResponse<any>> {
        try {
            const config: AxiosRequestConfig = {
                headers: {...this.getBaseHeaders(), ...headers}
            };
            return await axios.post(this.getApiPrefix() + url, data, config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async delete(url: string, headers?: Record<string, string>): Promise<AxiosResponse<any>> {
        try {
            const config: AxiosRequestConfig = {
                headers: {...this.getBaseHeaders(), ...headers}
            };
            return await axios.delete(this.getApiPrefix() + url, config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    private handleError(error: any): Error {
        console.warn('An error occurred while making the API request.');
        return error;
    }
}

export default ApiService;

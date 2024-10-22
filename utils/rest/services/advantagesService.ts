import ApiService from '../apiService';

class NewsService extends ApiService {
    private servicePrefix: string = 'v1/news';

    index(headers?: Record<string, string>) {
        const url = `/${this.servicePrefix}`;
        return this.request('get', url, undefined, headers || undefined);
    };
}

export default new NewsService();

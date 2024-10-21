import ApiService from './apiService';

class AdvantagesService extends ApiService {
    private servicePrefix: string = 'content/api/advantages';

    private async request(method: 'post' | 'get', url: string, data?: any) {
        try {
            const response = await (this as any)[method]('/' + this.servicePrefix + '/' + url, data);
            return response.data.message;
        } catch (error) {
            throw error;
        }
    }

    getAll(data: any) {
        return this.request('get', '', data);
    }
}

export default new AdvantagesService();

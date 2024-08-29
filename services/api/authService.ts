import ApiService from './apiService';

class AuthService extends ApiService {

    private async request(method: 'post' | 'get', url: string, data?: any) {
        try {
            const response = await (this as any)[method](url, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    register(data: any) {
        return this.request('post', '/register', data);
    }
}

export default new AuthService();

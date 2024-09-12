import ApiService from './apiService';

class AuthService extends ApiService {
    private servicePrefix: string = 'auth';

    private async request(method: 'post' | 'get', url: string, data?: any) {
        try {
            const response = await (this as any)[method]('/' + this.servicePrefix + '/' +  url, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    register(data: any) {
        return this.request('post', 'register', data);
    }

    generateOtp(data: any) {
        return this.request('post', 'otp/generate', data);
    }

    verifyOtp(data: any) {
        return this.request('post', 'otp/verify', data);
    }
}

export default new AuthService();

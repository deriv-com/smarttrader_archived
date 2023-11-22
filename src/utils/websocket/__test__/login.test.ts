import { loginUrl } from 'Utils/login';

describe('loginUrl function', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it('Ensure loginUrl is correct when server_url is not QA box', () => {
        const login_url = loginUrl();
        const test_url = 'https://oauth.deriv.com/oauth2/authorize?app_id=39852&l=EN&signup_device=null';
        expect(login_url).toBe(test_url);
    });
    it('Ensure loginUrl is correct when server_url is QA box', () => {
        localStorage.setItem('config.server_url', 'qa10.deriv.dev');
        const test_url = 'https://qa10.deriv.dev/oauth2/authorize?app_id=39852&l=EN&signup_device=null';
        const login_url = loginUrl();
        expect(login_url).toBe(test_url);
    });
});

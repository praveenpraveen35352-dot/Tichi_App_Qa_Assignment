const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Sign up verification', async ({ page }) => {

    const login = new LoginPage(page);

    await page.goto('https://tichi-app-webapp-stage.web.app/login');

    await login.login(
        'valluvans790@gmail.com'
    );
});
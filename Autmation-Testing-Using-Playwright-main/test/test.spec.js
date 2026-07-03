const { test } = require('@playwright/test');
const SignUpPage = require('../pages/SignUpPage');
const LoginPage = require('../pages/LoginPage');

test.skip('Validate non-existing user redirects to Login page', async ({ page }) => {

    const signUp = new SignUpPage(page);

    await signUp.navigate();

    await signUp.signUp(
        'John',
        'Doe',
        '9876543210',
        'test123@gmail.com',
        'Password@123'
    );

    await signUp.verifyRedirectToLogin();
});

test('Login with valid credentials', async ({ page }) => {

    const login = new LoginPage(page);

    await page.goto('https://tichi-app-webapp-stage.web.app/login');

    await login.login(
        'test@example.com',
        'Password123'
    );
});
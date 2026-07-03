const { test } = require('@playwright/test');
const SignUpPage = require('../pages/SignUpPage');

test('Verify non-existing email redirects to Login page', async ({ page }) => {

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
const { expect } = require('@playwright/test');

class SignUpPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.getByPlaceholder('Enter your first name');
        this.lastName = page.getByPlaceholder('Enter your last name');
        this.mobileNumber = page.getByPlaceholder('Enter your phone number');
        this.email = page.getByPlaceholder('Enter your email');
        this.password = page.getByPlaceholder('Enter your password');
        this.confirmPassword = page.getByPlaceholder('Enter your confirm password');

        this.termsCheckbox = page.locator('input[type="checkbox"]');

        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });

        this.Verification = page.getByRole('button', { name: 'Resend Verification' });
    }

    async navigate() {
        await this.page.goto('https://tichi-app-webapp-stage.web.app/sign-up');
    }

    async signUp(firstName, lastName, mobile, email, password) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.mobileNumber.fill(mobile);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);

        await this.termsCheckbox.check();

        await this.signUpButton.click();
    }

    async verifyRedirectToLogin() {
        await expect(this.loginButton).toBeVisible();
    }

}

module.exports = SignUpPage;
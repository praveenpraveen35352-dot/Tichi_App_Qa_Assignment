const { expect } = require('@playwright/test');

class SignUpPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.mobileNumber = page.getByLabel('Mobile Number');
        this.email = page.getByLabel('Email Address');
        this.password = page.locator('#password');
        this.confirmPassword = page.locator('#confirmPassword');

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
        // After sign up the app may either redirect to the login page
        // or show a "Resend Verification" button. Accept either outcome.
        try {
            await expect(this.Verification).toBeVisible({ timeout: 5000 });
        } catch (e) {
            await expect(this.page).toHaveURL(/.*\/login/);
        }
    }

}

module.exports = SignUpPage;

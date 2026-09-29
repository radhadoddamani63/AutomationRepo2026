import {page} from '@playwright/test'

export class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.emailField = page.getByPlaceholder('Enter Email');
        this.passwordField = page.getByPlaceholder('Enter Password');
        this.signButton = page.getByText('Sign in',{exact:true})
        this.errorMessage = page.locator(".errorMessage")
    }

    async loginToApplication(email,password)
    {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.signButton.click();
    }


    async getErrorMessage()
    {
        return await this.errorMessage.content();
    }
}
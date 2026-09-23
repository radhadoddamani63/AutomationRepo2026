import {page} from '@playwright/test'

export class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.emailField = page.getByPlaceholder('Enter Email');
        this.passwordField = page.getByPlaceholder('Enter Password');
        this.signButton = page.getByText('Sign in',{exact:true})
    }

    async loginToApplication(email,password)
    {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.signButton.click();
    }
}
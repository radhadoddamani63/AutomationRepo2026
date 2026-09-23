import {page} from '@playwright/test'

export class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.usernameField = page.getByPlaceholder('Eneter user name');
        this.passwordField = page.getByPlaceholder('Enter your Password');
        this.signButton = page.getByText('Sign in',{exact:true})
    }

    async loginToApplication(usernameField,passwordField)
    {
        await this.usernameField.fill(usernameField);
        await this.passwordField.fill(passwordField);
        await this.signButton.click();
    }
}
import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'
import user from '../testdata/user.json'


test("Login into Application", async({page}) =>{

    await page.goto('/login');
    const loginPage = new LoginPage(page);

    console.log();
    
    await loginPage.loginToApplication(user.Email,user.Password);
})
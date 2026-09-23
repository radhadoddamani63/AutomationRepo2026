import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'


test("Login into Application", async({page}) =>{

    await page.goto('/login');
    const loginPage = new LoginPage(page);

    await loginPage.loginToApplication()
})
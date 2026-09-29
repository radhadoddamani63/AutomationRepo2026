import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'
import multiuser from '../testdata/userValidation.json'


for (const user of multiuser) 
{
    
test(`Login into Application ${user.id}`, async({page}) =>{

    await page.goto('/login');
    const loginPage = new LoginPage(page);

    console.log();
    
    await loginPage.loginToApplication(user.Email,user.Password);

     await expect (loginPage.errorMessage).toHaveText(user.message);
})    
}

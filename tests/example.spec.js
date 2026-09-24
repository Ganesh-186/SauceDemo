import {test} from '@playwright/test';
import { LoginPage} from '../pages/Login';
import user from '../data/user-data.json'

test('SauceDemo',async({page})=>{
  const Login = new LoginPage(page);
  await Login.login(user.user6.name,user.password);
  await page.waitForTimeout(4000);
})

//added by Basker -- Train module
test('Train Scenario',async({page})=>{
  const Login = new LoginPage(page);
  await Login.login(user.user1.name,user.password);
  await page.waitForTimeout(4000);
})
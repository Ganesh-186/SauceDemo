import { LoginPage } from '../pages/LoginPage';
import { test as base,expect } from "@playwright/test";

export const test = base.extend({
    loginPage: async ({page}, use)=>{
        const loginPage = new LoginPage(page);
        
        await use(loginPage)
    }
})
export {expect};
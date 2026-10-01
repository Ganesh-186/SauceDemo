import { BasePage } from "./BasePage";
export class LoginPage extends BasePage {

    constructor(page) {
        super(page)
        this.page = page;
        this.userName = this.page.locator('#user-name');
        this.password = this.page.locator('#password');
        this.button = this.page.locator('#login-button');
    }

    async navigate() {
        await this.page.goto('./');
    }

    async enterUserName(userName) {
        await this.fillText(this.userName, userName);
    }

    async enterPassword(password) {
        await this.fillText(this.password, password);
    }
    async clickLogin() {
        await this.clickElement(this.button);
    }

    async login(username, password) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
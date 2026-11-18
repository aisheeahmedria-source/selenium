import { Builder,By } from "selenium-webdriver";
class Base{
    constructor(){
        this.driver = new Builder().forBrowser('chrome').build();
    }
    async openBrowser(){
    console.log("opening the browser");
    await this.driver.get("https://www.npmjs.com/");
    }
    async closeBrowser(){
     console.log("closing the browser");   
    await this.driver.quit();
    }
}
const result = new Base();
await result.openBrowser();
await result.closeBrowser();
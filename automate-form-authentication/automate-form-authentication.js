require('chromedriver');
const { Builder } = require('selenium-webdriver');

async function formAuthentication() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://the-internet.herokuapp.com/login');
    await driver.manage().window().maximize();
    await driver.sleep(3000);
    
    const usernameField = await driver.findElement({ xpath: '//*[@id="username"]' });
    await usernameField.sendKeys('tomsmith');
    
    const passwordField = await driver.findElement({ xpath: '//*[@id="password"]' });
    await passwordField.sendKeys('SuperSecretPassword!');

    const loginButton = await driver.findElement({ xpath: '//*[@id="login"]/button' });
    await loginButton.click();

    await driver.sleep(3000); // Wait for the login to process

    const logoutButton = await driver.findElement({ xpath: '//*[@id="content"]/div/a'});
    await logoutButton.click();
    //await driver.quit();
}

formAuthentication();
require('chromedriver');
const { Builder } = require('selenium-webdriver');

async function openGoogleInChrome() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    await driver.manage().window().maximize();
    await driver.sleep(3000);
    
    try {
        const agreeButton = await driver.findElement({ css: 'kHtcsd'});
        await agreeButton.click();
        console.log('Successfully clicked the button');
    } catch (error) {
        console.error('Failed to click');
    }

    await driver.quit();
}

openGoogleInChrome();
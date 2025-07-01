require('chromedriver');
const { Builder } = require('selenium-webdriver');

async function formAuthentication() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://29.strategicerpcloud.com/');
    await driver.manage().window().maximize();
    await driver.sleep(3000);
    
    const companyCode = await driver.findElement({ xpath: '//*[@id="companyName"]' });
    await companyCode.sendKeys('*****');

    await driver.sleep(1500); // Wait for the field to be ready

    const nextButton = await driver.findElement({ xpath: '//*[@id="next_button"]' });
    await nextButton.click();
    
    await driver.sleep(3000); // Wait for the field to be ready
    const usernameField = await driver.findElement({ xpath: '//*[@id="loginNameTemp"]' });
    await usernameField.sendKeys('*****');

    const passwordField = await driver.findElement({ xpath: '//*[@id="passwd"]' });
    await passwordField.sendKeys('*****');

    const loginButton = await driver.findElement({ xpath: '//*[@id="button"]' });
    await loginButton.click();

    await driver.sleep(5000); // Wait for the login to process

    const leftMenuClientButton = await driver.findElement({ xpath: '/html/body/div[5]/div/aside/ul/ul[3]/a/img' });
    await leftMenuClientButton.click();

    await driver.sleep(3000); // Wait for the left menu to open

    const proposalEstimateButton = await driver.findElement({ xpath: '//*[@id="llmenu"]/div/main[2]/ul[4]/li/a' });
    await proposalEstimateButton.click();

    await driver.sleep(3000); // Wait for the proposal estimate page to load

    const recordSearchButton = await driver.findElement({ xpath: '//*[@id="permissionButtons"]/input[2]' });
    await recordSearchButton.click();

    await driver.sleep(3000); // Wait for the search to process

    const pickRecordButton = await driver.findElement({ xpath: '//*[@id="viewFormField1table"]/tbody/tr[2]/td[3]/a' });
    await pickRecordButton.click();

    await driver.sleep(3000); // Wait for the record to be picked

    const reExecuteButton = await driver.findElement({ xpath: '//*[@id="dynamicButtons"]/input[1]' });
    await reExecuteButton.click();

    await driver.sleep(3000); // Wait for the re-execution to process

    const yesButton = await driver.findElement({ xpath: '//*[@id="alertify-ok"]' });
    await yesButton.click();

    await driver.sleep(3000); // Wait for the confirmation to process
    //await driver.quit();
}

formAuthentication();
require('chromedriver');
const { Builder } = require('selenium-webdriver');

async function scraping() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://books.toscrape.com/');
        await driver.manage().window().maximize();
        await driver.sleep(3000);

        let titles = [];
        let prices = [];

        for (let page = 1; page <= 2; page++) {
            await driver.sleep(2000);
            let books = await driver.findElements({ css: 'article.product_pod' });

            for (let book of books) {
                let title = await book.findElement({ css: 'h3 a' }).getAttribute('title');
                let price = await book.findElement({ css: 'p.price_color' }).getText();
                titles.push(title);
                prices.push(price);
            }

            if (page < 2) {
                let nextButton = await driver.findElement({ css: 'li.next a' });
                await nextButton.click();
            }

        }

        for (let i = 0; i < titles.length; i++) {
            console.log(`Title: ${titles[i]}, Price: ${prices[i]}`);
        }

        let csvContent = 'Title,Price\n';
        for (let i = 0; i < titles.length; i++) {
            csvContent += `${titles[i]},${prices[i]}\n`;
        }
        require('fs').writeFileSync('books.csv', csvContent);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}
scraping();
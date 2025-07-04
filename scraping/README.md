# 📚 Book Price Scraper using Selenium WebDriver (JavaScript)

This project uses **Selenium WebDriver** with **Node.js** to scrape book titles and prices from the website [Books to Scrape](https://books.toscrape.com/). The scraped data from the first two pages is printed to the console and saved in a CSV file.

## 🚀 Features

- Launches Chrome browser using Selenium WebDriver
- Scrapes:
  - Book **titles**
  - Book **prices**
- Navigates to the next page
- Saves the results to `books.csv` in CSV format

## 📦 Dependencies

- `selenium-webdriver`
- `chromedriver`
- `fs` (Node.js built-in)

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [ChromeDriver](https://chromedriver.chromium.org/) (added to system PATH)

Install dependencies:

```bash
npm install selenium-webdriver chromedriver

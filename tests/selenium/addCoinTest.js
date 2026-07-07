const { Builder, By } = require("selenium-webdriver");

(async function addCoinTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:5173");

    await driver.findElement(
      By.css("input[placeholder*='Coin']")
    ).sendKeys("bitcoin");

    await driver.findElement(
      By.css("input[placeholder='Quantity']")
    ).sendKeys("2");

    await driver.findElement(
      By.css("input[placeholder='Buy Price']")
    ).sendKeys("100000");

    await driver.findElement(
      By.css("button[type='submit']")
    ).click();

    console.log("PASS: Coin Added");
  } catch (err) {
    console.log("FAIL:", err);
  }

  await driver.quit();
})();
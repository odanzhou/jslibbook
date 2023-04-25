const puppteer = require('puppeteer');

(async () => {
  const testPath = `file://${__dirname}/index.html`
  const headless = false
  const browser = await puppteer.launch({
    headless,
  })
  const page = await browser.newPage()
  await page.goto(testPath)
  // 截屏并保存
  const pngPath = `${__dirname}/browser.png`
  await page.screenshot({ path: pngPath, fullPage: true})
  /* --- 占位符 --- */

  await new Promise((resolve) => {
    setTimeout(async () => {
      await browser.close()
      resolve()
    }, 10 * 1000)
  })
})()
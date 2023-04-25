const puppteer = require('puppeteer');

const check = async ({ page, browser}) => {
  await page.waitFor('.suite')
  // 通过
  const passNodes = await page.$$('.pass')
  // 失败
  const failNodes = await page.$$('.fail')
  if(passNodes && passNodes.length != null) {
    console.log(`message: 通过 ${passNodes.length} 项`)
  }
  if(failNodes && failNodes.length != null) {
    console.log(`message: 失败 ${failNodes.length} 项`)
    await browser.close()
    process.exit(1)
  }
}

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
  await check({ page, browser})
  // 关闭浏览器
  await new Promise((resolve) => {
    setTimeout(async () => {
      await browser.close()
      resolve()
    }, 10 * 1000)
  })
})()
const puppeteer = require('puppeteer')

const check = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()

  await page.goto(process.env.HEALTHCHECK_URL)

  try {
    await page.waitForSelector('[data-healthcheck]', { timeout: 5000 })
    const response = await page.$eval('[data-healthcheck]', el => el.innerHTML)
    console.log(response)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  await browser.close()
}

check().then(() => console.log('finished'))

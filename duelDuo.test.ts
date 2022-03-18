
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(3000)
});

test('Make sure all bots appear when all bots button is clicked', async () => {
    const allBtn = await driver.findElement(By.id('see-all'))
    await allBtn.click()

    let displayedBots = await driver.findElement(By.xpath('(//div[@id="all-bots"]/div[@class="bot-card outline"]) [1]'))

    
    const displayed = await displayedBots.isDisplayed()
    expect(displayed).toBe(true)
    
    await driver.sleep(5000)
})

test('Draw button displays choices', async () => {
    const title = await driver.findElement(By.id('draw'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});


test('Duel Button displays duel', async () => {
    const title = await driver.findElement(By.id('duel'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    
   

});


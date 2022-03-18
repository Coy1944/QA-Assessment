
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
}),

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

//sleep(3000);
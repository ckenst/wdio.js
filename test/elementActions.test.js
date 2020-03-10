const internetPage = require('../pages/internet.page')

describe('Test element actions', () => {
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLInk()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })

    it('Should get text', () => {

    })
});
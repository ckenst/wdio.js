const internetPage = require('../pages/internet.page')

describe('Test element actions', () => {
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLInk()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    });

    it('Should get text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    });

    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    });

    it('should uncheck checkbox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    });

    it('Should enter username', () => {
        browser.url(`/login`)
        internetPage.enterUsername('chris');
        assert.equal('chris', internetPage.username.getValue());
    });

    it('Should enter password', () => {
        browser.url(`/login`)
        internetPage.enterPassword('Password');
        assert.equal('Password', internetPage.password.getValue());
    });

    it('Should clear value', () => {
        internetPage.username.click();
        internetPage.username.clearValue(); 
        assert.equal('', internetPage.username.getValue());
    });
});
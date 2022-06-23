describe('Go to Google', () => {
    it('should open', () => {
        browser.url('https://www.google.com/');
        expect(browser).toHaveUrl('https://www.google.com/');
    })
});
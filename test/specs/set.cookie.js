const LoginPage = require('../pageobjects/login.page');

describe('My Demo application', () => {
    it('should set a cookie for the login', async () => {
        await browser.setCookies({
            name: 'session-username',
            value: 'standard_user',
            domain: 'www.saucedemo.com',
            path: '/'
        })
    });

    it('should access a pdp behind login', async () => {
        await LoginPage.open('inventory-item.html?id=4');

        const productName = $('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size');
        await expect(productName).toHaveText('Sauce Labs Backpack');
    });

    it('product added to cart', async () => {
        const addToCart = $('#add-to-cart-sauce-labs-backpack');
        await addToCart.click();
        const cart = $('.shopping_cart_badge')
        await expect(cart).toHaveText('1');
    });

    it('should load cart', async () => {
        await LoginPage.open('cart.html');
        
        const title = $('#header_container > div.header_secondary_container > span')
        await expect(title).toHaveTextContaining('CART');
    });

    it('should go to checkout', async () => {
        const checkout = $('#checkout');
        await checkout.click();
        const title = $('#header_container > div.header_secondary_container > span')
        await expect(title).toHaveTextContaining('CHECKOUT');
    });
}); 
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('My Demo application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open('');

        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.secondaryTitle).toHaveTextContaining(
            'PRODUCTS');
    });
});



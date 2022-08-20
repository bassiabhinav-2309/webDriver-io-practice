import { open, login } from '../pageobjects/login.page';
import { flashAlert, btnLogout } from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await open();

        await login('tomsmith', 'SuperSecretPassword!');
        await expect(flashAlert).toBeExisting();
        await expect(flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('it should logout and verify logout alert message',() =>{
        btnLogout().click();

         expect(flashAlert).toHaveTextContaining("You logged out of the secure area!");
    });
});



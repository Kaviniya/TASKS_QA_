const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');


test.describe('Tichi App - Login Functionality', () => {
  let loginPage;

  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC_1: Login page loads successfully', async () => {
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.continueButton).toBeVisible();
    await expect(loginPage.googleButton).toBeVisible();
  });

  test('TC_2: Email textbox is editable', async () => {
    await loginPage.fillEmail('user@gmail.com');
    await expect(loginPage.emailInput).toHaveValue('user@gmail.com');
  });

  test('TC_3: Continue button is visible and enabled', async () => {
    await expect(loginPage.continueButton).toBeVisible();
    await expect(loginPage.continueButton).toBeEnabled();
  });

  test('TC_4: Continue with Google button is visible', async () => {
   
    await expect(loginPage.googleButton).toBeVisible();
  });

  test('TC_5: Invalid email format keeps user on Login page', async () => {
    
    const invalidEmail = 'usergmail.com';

    await loginPage.submitEmail(invalidEmail);

    await expect(loginPage.page).toHaveURL(/\/login/);


    await expect(loginPage.passwordInput).not.toBeVisible();
  });

  test('TC_6: Empty email keeps Password field hidden', async () => {
    
    await loginPage.clickContinue();

 
    await expect(loginPage.passwordInput).not.toBeVisible();

   
    await expect(loginPage.page).toHaveURL(/\/login/);
  });

  test('TC_7: Valid email reveals the Password field', async () => {
    
    const validEmail = 'user@gmail.com';

    await loginPage.submitEmail(validEmail);

  
    await expect(loginPage.passwordInput).toBeVisible();

   
  });
});

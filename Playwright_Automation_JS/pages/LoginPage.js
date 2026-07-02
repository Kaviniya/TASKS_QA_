
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.continueButton = page.locator('button[type="submit"]');

this.googleButton = page.getByRole('button', {
  name: /continue with google/i
});
   
    this.passwordInput = page.locator('#password');
  }

    async goto() {
    await this.page.goto('/login');
  }

  /**
      * @param {string} email
   */
  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  
  async clickContinue() {
    await this.continueButton.click();
  }

  /**
  
   * @param {string} email
   */
  async submitEmail(email) {
    await this.fillEmail(email);
    await this.clickContinue();
  }
}

module.exports = { LoginPage };

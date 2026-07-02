# Tichi App - Login Automation (Playwright + JavaScript)

Automated test suite covering the **Login functionality** of the Tichi App
(`https://tichi-app-webapp-stage.web.app/login`), built with **Playwright
Test**, plain **JavaScript**, and the **Page Object Model (POM)** pattern.

## Folder Structure

```
Playwright_Automation/
│
├── pages/
│   └── LoginPage.js        # Page Object Model for the Login page
│
├── tests/
│   └── login.spec.js       # TC_1 - TC_7 login test scenarios
│
├── playwright.config.js    # Chromium-only config, HTML reporter, screenshots, trace
├── package.json
├── README.md
└── .gitignore
```

## Test Cases Covered

| ID   | Scenario                                                  |
|------|-------------------------------------------------------------|
| TC_1 | Login page loads (email, Continue, Google button visible) |
| TC_2 | Email textbox is editable                                  |
| TC_3 | Continue button is visible and enabled                     |
| TC_4 | Continue with Google button is visible (not clicked)       |
| TC_5 | Invalid email format keeps user on the Login page          |
| TC_6 | Empty email keeps the Password field hidden                |
| TC_7 | Valid email reveals the Password field                     |

## Locators Used

| Element               | Selector                              |
|------------------------|---------------------------------------|
| Email textbox           | `#email`                              |
| Continue button          | `button[type="submit"]`               |
| Continue with Google btn | `getByText('Continue with Google')`   |
| Password textbox         | `#password`                           |

All selectors are stable CSS/text-based locators — no XPath is used.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

## 1. Project Setup / Install Dependencies

```bash
cd Playwright_Automation
npm install
```

## 2. Install Playwright Browsers

```bash
npx playwright install
```

(Or use the shortcut script: `npm run install:browsers`)

## 3. Run the Tests

Run the full suite (headless, Chromium):

```bash
npx playwright test
```

Run in headed (visible browser) mode:

```bash
npm run test:headed
```

Run in Playwright's interactive UI mode:

```bash
npm run test:ui
```

Debug a test step by step:

```bash
npm run test:debug
```

## 4. Generate & View the HTML Report

An HTML report is generated automatically after every run (configured in
`playwright.config.js`). To open it:

```bash
npx playwright show-report
```

(Or use the shortcut script: `npm run report`)

## Configuration Highlights

- **Browser**: Chromium only
- **Execution mode**: Headless
- **Reporter**: HTML (auto-generated after each run) + list reporter in console
- **Screenshots**: Captured only on test failure
- **Trace**: Captured on first retry (useful for debugging CI failures)

## Best Practices Applied

- Page Object Model (POM) separates locators/actions from test logic.
- No `page.waitForTimeout()` calls anywhere — Playwright's built-in
  auto-waiting and web-first `expect()` assertions are used throughout.
- Stable CSS/text-based locators only — no XPath.
- Each test is independent (`beforeEach` re-navigates to the Login page),
  so tests can run in parallel and in any order.
- Meaningful comments explain the intent of every locator and test step.
"# QA_TASKS" 
"# Task_QA_" 

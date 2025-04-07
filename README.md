# 🧪 Cypress UI Testing

> A clean and modular QA automation project using **Cypress** and **JavaScript**..

---


## 🚀 Features

- 🧪 End-to-end tests for [ParaBank](https://parabank.parasoft.com/parabank/index.htm)
- 📷 Automatic screenshots failed test
- 📄 Clear and well-documented test cases

---

## 🛠️ Tech Stack

- [Cypress] for browser automation
- JavaScript

---

## 📂 Project Structure

```bash
.
├── cypress/
│   └── e2e
│      └── login.cy.js      # Example test file
│   └── screenshots
│   └── support
│      └── e2e.js           # support file
├── docs/
│   └── test-design.md
│   └── test-plan.md
├── README.md
```

---

## 📸 Screenshots

After each test, a screenshot is automatically saved. You can find them in the test report or set your own logic in `utils/saveScreenshot.ts`.

---

## 📊 Test Reports

To view your test results:

```bash
npx playwright test
npx playwright show-report
```

Reports are generated in the `playwright-report/` folder.

---

## 🧪 Running Tests Locally

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Open the test report:

```bash
npx playwright show-report
```

---

## 🛡 GitHub Badges

![Playwright](https://img.shields.io/badge/tested%20with-Playwright-blueviolet?logo=playwright)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue?logo=typescript)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

_(Optional: Add a GitHub Actions badge once CI is integrated)_

---

## 📌 Test Case Examples

- Login with valid credentials
- Login with invalid credentials
- Product sorting validation
- Add/remove items from cart
- Checkout flow test

More tests to be added as the project evolves.

---

## 📬 Feedback & Contributions

Feel free to open an issue or PR if you want to contribute or suggest improvements!

---

Thanks for checking out this project ❤️

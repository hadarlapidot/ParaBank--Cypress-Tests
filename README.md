
# ParaBank Cypress Tests

## 📊 Test Reports

To view your test results:

```bash
npx cypress run
```

Reports are generated in the `cypress/reports/` folder.

---

## 🛡 GitHub Badges

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E?logo=cypress)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow?logo=javascript)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 🧪 Running Tests Locally

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx cypress run
```

Open the test report:

```bash
npx mochawesome-merge cypress/reports/*.json | npx mochawesome-report-generator
```

---

## 📌 Test Case Examples

Here are some test case examples for the project:

- Login with valid credentials
- Login with invalid credentials
- Register with valid credentials

More tests will be added as the project evolves.

---

## 📬 Feedback & Contributions

Feel free to open an issue or pull request (PR) if you want to contribute or suggest improvements!

---

Thanks for checking out this project ❤️

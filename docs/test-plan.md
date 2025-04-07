# Test Plan for Parabank Login

## 1. Test Objective

Verify that a user can log in to the Parabank application using valid credentials and be directed to the "Accounts Overview" page.

## 2. Scope

- Test valid login functionality.
- Ensure the correct redirection to the **Accounts Overview** page.

## 3. Test Environment

- **URL**: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
- **Browser**: Chrome (or preferred browser)
- **Cypress Version**: Latest (verify in `package.json`)

## 4. Test Strategy

- **Manual**: Testing will be automated using Cypress to simulate user login.
- **Automation**: The test will validate that the user can log in successfully with valid credentials.

## 5. Test Inputs

- Username: `john`
- Password: `demo`

## 6. Test Criteria

- **Pass**: The user is successfully logged in and redirected to the "Accounts Overview" page.
- **Fail**: The user is not redirected, or there is an error with login functionality.

## 7. Test Schedule

- **Test Execution Time**: ~5 minutes
- **Start Date**: [Insert Date]
- **End Date**: [Insert Date]

## 8. Test Deliverables

- Test Results Report
- Screenshot (if required)

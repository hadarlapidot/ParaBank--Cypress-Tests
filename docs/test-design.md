# Test Design for Parabank Login

## 1. Test Case 1: Verify User Login with Valid Credentials

- **Test ID**: TC01
- **Test Description**: Verify that a user can log in with valid credentials and is directed to the "Accounts Overview" page.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Enter the username `john` in the **Username** field.
3. Enter the password `demo` in the **Password** field.
4. Click on the **Login** button (submit button).
5. Verify that the "Accounts Overview" page is visible.

### Expected Result:

- The user should be successfully logged in and redirected to the "Accounts Overview" page.

#### Status: Pass/Fail

---

## 2. Test Case 2: Verify Login with Empty Username

- **Test ID**: TC02
- **Test Description**: Verify that the user cannot log in when the username field is left empty.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Leave the **Username** field empty.
3. Enter the password `demo` in the **Password** field.
4. Click on the **Login** button.
5. Verify that an error message is displayed, indicating that the username is required.

### Expected Result:

- The login attempt should fail, and the user should see an error message prompting them to enter a valid username.

#### Status: Pass/Fail

---

## 3. Test Case 3: Verify Login with Empty Password

- **Test ID**: TC03
- **Test Description**: Verify that the user cannot log in when the password field is left empty.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Enter the username `john` in the **Username** field.
3. Leave the **Password** field empty.
4. Click on the **Login** button.
5. Verify that an error message is displayed, indicating that the password is required.

### Expected Result:

- The login attempt should fail, and the user should see an error message prompting them to enter a valid password.

#### Status: Pass/Fail

---

## 4. Test Case 4: Verify Login with Invalid Credentials

- **Test ID**: TC04
- **Test Description**: Verify that the user cannot log in with invalid credentials.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Enter the username `invalidUser` in the **Username** field.
3. Enter the password `wrongPassword` in the **Password** field.
4. Click on the **Login** button.
5. Verify that an error message is displayed, indicating invalid login credentials.

### Expected Result:

- The login attempt should fail, and the user should see an error message indicating invalid credentials.

#### Status: Pass/Fail

---

## 5. Test Case 5: Verify "Forgot Username" Link

- **Test ID**: TC05
- **Test Description**: Verify that the "Forgot Username" link is functional.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Click on the **"Forgot your username?"** link.
3. Verify that the user is redirected to the **Forgot Username** page.

### Expected Result:

- The user should be redirected to the **Forgot Username** page where they can retrieve their username.

#### Status: Pass/Fail

---

## 6. Test Case 6: Verify UI Elements on Login Page

- **Test ID**: TC06
- **Test Description**: Verify that the necessary UI elements are present on the login page.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Verify that the following elements are visible:
   - **Username field**
   - **Password field**
   - **Login button**
   - **Forgot Username link**
   - **Forgot Password link**
   - **Logo (if present)**

### Expected Result:

- All the UI elements should be visible and accessible on the login page.

#### Status: Pass/Fail

---

## 7. Test Case 7: Verify Redirect to Password Recovery Page

- **Test ID**: TC07
- **Test Description**: Verify that clicking the "Forgot Password" link redirects the user to the password recovery page.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Click on the **"Forgot your password?"** link.
3. Verify that the user is redirected to the **Password Recovery** page.

### Expected Result:

- The user should be redirected to the password recovery page.

#### Status: Pass/Fail

---

### Complicated Test Case Examples

## 8. Test Case 9: Verify Login with Session Persistence

- **Test ID**: TC08
- **Test Description**: Verify that the login session persists when the user navigates between pages within the application.

### Test Steps:

1. Open the Parabank URL: [Parabank URL](https://parabank.parasoft.com/parabank/index.htm)
2. Log in with valid credentials (e.g., username: `john`, password: `demo`).
3. Navigate to a different page within the app (e.g., Account Overview).
4. Click on the **Back** button in the browser to return to the login page.
5. Verify that the user is still logged in (i.e., the session is persistent) and is redirected to the Account Overview page.

### Expected Result:

- The user should remain logged in even after navigating back to the login page.

#### Status: Pass/Fail

---

### How to Implement These in Cypress:

You can implement all of these test cases by creating individual test files for each, or you can organize them into one large test suite. Here’s an example of the code for the **Test Case 1** (valid login):

```js
describe("Parabank Login", () => {
  it("should log in with valid credentials and go to Accounts Overview", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get('input[name="username"]').type("john");
    cy.get('input[name="password"]').type("demo");
    cy.get('input[type="submit"]').click();
    cy.contains("Accounts Overview").should("be.visible");
  });

  it("should show error on empty username", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get('input[name="password"]').type("demo");
    cy.get('input[type="submit"]').click();
    cy.contains("Username is required").should("be.visible");
  });
});
```

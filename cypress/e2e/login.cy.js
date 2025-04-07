describe("Parabank UI Tests", () => {
  // Test Case 1: Verify User Login with Valid Credentials
  it("should log in with valid credentials and go to Accounts Overview", () => {
    cy.visit("/parabank/index.htm");
    cy.get('input[name="username"]').type("john");
    cy.get('input[name="password"]').type("demo");
    cy.get('input[type="submit"]').click();
    cy.contains("Accounts Overview").should("be.visible");
  });

  // Test Case 2: Verify Login with Empty Username
  it("should show an error on empty username", () => {
    cy.visit("/parabank/index.htm");
    cy.get('input[name="password"]').type("demo");
    cy.get('input[type="submit"]').click();
    cy.contains("Please enter a username and password.").should("be.visible");
    cy.url().should("include", "login");
  });

  // Test Case 3: Verify Login with Empty Password
  it("should show an error on empty password", () => {
    cy.visit("/parabank/index.htm");
    cy.get('input[name="username"]').type("john");
    cy.get('input[type="submit"]').click();
    cy.contains("Please enter a username and password.").should("be.visible");
    cy.url().should("include", "login");
  });

  // Test Case 4: Verify Login with Invalid Credentials
  it("should show an error on invalid credentials", () => {
    cy.visit("/parabank/index.htm");
    cy.get('input[name="username"]').type("invalidUser");
    cy.get('input[name="password"]').type("wrongPassword");
    cy.get('input[type="submit"]').click();
    cy.contains("An internal error has occurred and has been logged.").should(
      "be.visible"
    );
    cy.url().should("include", "login");
  });

  // Test Case 5: Verify "Customer Lookup" Link
  it("should redirect to 'Customer Lookup' page", () => {
    cy.visit("/parabank/index.htm");
    cy.contains("a", "Forgot login info?").click();
    cy.location("pathname").should("include", "lookup.htm");
    cy.contains("Customer Lookup").should("be.visible");
  });

  // Test Case 6: Verify UI Elements on Login Page
  it("should display necessary UI elements", () => {
    cy.visit("/parabank/index.htm");
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get("#leftPanel").find('input[type="submit"]').should("be.visible");
    cy.contains("a", "home").should("be.visible");
  });

  // Test Case 7: Verify Registration Flow
  it("should register a new user successfully", () => {
    cy.visit("/parabank/index.htm");
    cy.contains("a", "Register").click();

    // Fill out the registration form
    cy.get('input[name="customer.firstName"]').type("John"); // First Name
    cy.get('input[name="customer.lastName"]').type("Doe"); // Last Name
    cy.get('input[name="customer.address.street"]').type("123 Main St"); // Address
    cy.get('input[name="customer.address.city"]').type("Springfield"); // City
    cy.get('input[name="customer.address.state"]').type("IL"); // State
    cy.get('input[name="customer.address.zipCode"]').type("62701"); // Zip Code
    cy.get('input[name="customer.phoneNumber"]').type("5551234567"); // Phone
    cy.get('input[name="customer.ssn"]').type("1234567"); // SSN
    cy.get('input[name="customer.username"]').type("john_doe"); // Username
    cy.get('input[name="customer.password"]').type("Password123"); // Password
    cy.get('input[name="repeatedPassword"]').type("Password123"); // Confirm Password

    cy.get("#rightPanel").find('input[type="submit"]').click();

    cy.contains(
      "Your account was created successfully. You are now logged in."
    ).should("be.visible");
    cy.contains("Welcome John").should("be.visible");
    cy.contains("a", "Log Out").should("be.visible");
  });

  // Test Case 8: Verify Login with Session Persistence
  it("should maintain session after navigating through pages", () => {
    cy.visit("/parabank/index.htm");
    cy.get('input[name="username"]').type("john");
    cy.get('input[name="password"]').type("demo");
    cy.get('input[type="submit"]').click();
    cy.contains("h1", "Accounts Overview").should("be.visible");

    // Now navigate to a different page and come back
    cy.get("#footerPanel > :nth-child(1) > :nth-child(3) > a").click();
    cy.contains("Available Bookstore SOAP services").should("be.visible"); // Verify you're on the services page
    cy.go("back");
    cy.get("#showOverview > .title").should("be.visible");

    // Verify you are still logged in
    cy.get("#leftPanel > ul > :nth-child(8) > a").should("be.visible"); //log out button
  });
});

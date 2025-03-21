# 🍜 Kimchinamai Website E2E Cypress Tests 🧪

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 📋 Overview

This repository contains comprehensive end-to-end (E2E) tests for the Kimchinamai restaurant website using Cypress, a powerful modern testing framework for web applications. These tests validate various aspects of the website including page navigation, menu interactions, shopping cart functionality, and checkout processes, ensuring a seamless user experience.

## 🛠️ Technologies Used

- **[Cypress](https://www.cypress.io/)**: Fast, easy and reliable testing for anything that runs in a browser
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Programming language for the test scripts
- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment
- **[GitHub Actions](https://github.com/features/actions)**: CI/CD automation
- **[Mocha](https://mochajs.org/)**: Testing framework running in Cypress
- **[Chai](https://www.chaijs.com/)**: Assertion library
- **[ESLint](https://eslint.org/)**: JavaScript linter
- **[Cypress Dashboard](https://dashboard.cypress.io/)**: Test recording and monitoring service

## 🏗️ Project Structure

```
├── .github/workflows        # GitHub Actions workflow files
├── cypress                  # Cypress test files and configuration
│   ├── downloads           # Files downloaded during tests
│   ├── e2e                 # End-to-end test specifications
│   ├── fixtures            # Test data files
│   ├── plugins             # Cypress plugins
│   ├── screenshots         # Failed test screenshots
│   ├── support             # Support files (commands, page objects)
│   │   ├── commands.js     # Custom Cypress commands
│   │   ├── e2e.js          # Entry point for support code
│   │   └── pages           # Page Object classes
├── node_modules            # Node.js dependencies
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── cypress.config.js      # Cypress configuration
├── package-lock.json      # Dependency lock file
└── package.json           # Project metadata and dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or newer)
- npm (v6 or newer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anikush-yes/Kimchinamai_Website_e2e_Cypress_Tests.git
   cd Kimchinamai_Website_e2e_Cypress_Tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

Run tests in headless mode:
```bash
npx cypress run
```

Open Cypress Test Runner UI:
```bash
npx cypress open
```

Run specific test file:
```bash
npx cypress run --spec "cypress/e2e/menu.spec.js"
```

Run tests in a specific browser:
```bash
npx cypress run --browser chrome
```

## 🧩 Test Framework Architecture

### Page Object Pattern

The project follows the Page Object pattern to encapsulate page elements and interactions, making tests more maintainable and readable.

Example Page Object (Home Page):

```javascript
// cypress/support/pages/HomePage.js
class HomePage {
  visit() {
    cy.visit('/');
  }

  getMenuButton() {
    return cy.get('[data-test="menu-button"]');
  }

  getContactInfo() {
    return cy.get('.contact-info');
  }

  navigateToMenu() {
    this.getMenuButton().click();
  }

  getRestaurantName() {
    return cy.get('.restaurant-name').should('contain', 'Kimchinamai');
  }
}

export default new HomePage();
```

### Custom Commands

Cypress custom commands are used to extend the Cypress API with commonly used operations:

```javascript
// cCypress.Commands.add('launchBrowser', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log('Ignoring uncaught exception:', err.message);
        return false;
    });

    cy.visit('https://kimchinamai.lt/', {
        onBeforeLoad(win) {
            win.XMLHttpRequest = null;
        }
    });
    cy.url().should('eq', 'https://kimchinamai.lt/');    
});
```

## 📝 Test Examples

### Navigation menu Test

```javascript
/// <reference types="cypress" />

describe('Verifies that the navigation menu functions correctly by ensuring each menu item redirects to the appropriate page', () => {

    it('Redirects the user without errors to the correct page: Pagrindinis, Parduotuvė, Tinklaraštis, Kontaktai, and the content of the page should be displayed properly.', () => {

        //1.1

        cy.launchBrowser();

        //1.2-1.3

        // PAGRINDINIS (Main page link)
        cy.get('.pk-nav-link').contains('PAGRINDINIS').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/');

        // PARDUOTUVĖ (Store page link)
        cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

        // TINKLARAŠTIS (Blog page link)
        cy.get('.pk-nav-link').contains('TINKLARAŠTIS').click({ force: true });
        cy.contains('h1', 'AR ŽINOJOTE?').should('exist').and('be.visible');

        // Clearing cookies, localStorage, and reloading the page
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();

        // KONTAKTAI (Contacts page link) - using `cy.get()` for `.pk-nav-link`
        cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-326c126 > :nth-child(1) > :nth-child(1) > .elementor-element-00ee875 > :nth-child(1) > .pk-ce-widget-wrapper > .pk-ce-widget > .pk-nav > .pk-nav-ul > :nth-child(4) > .flex-container > .pk-nav-link').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/susisiekite-su-mumis');
        cy.contains('SUSISIEKITE SU MUMIS').should('be.visible');
    });
});
```

### Adding to the Spopping Cart Test

```javascript
/// <reference types="cypress" />

describe('Shopping Cart', () => {

  it('Should add a product to the cart and verify it', () => {

    //4.1-4.2

    cy.launchBrowser();

    cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
    cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

    //4.3 Click Į krepšelį on a product.

    cy.get('a[href="#ce-action=addToCart"]')
      .should('be.visible')
      .each(($el, index, $list) => {
        cy.wrap($el).click({ force: true });
        cy.wait(500);
      });

    ///4.4 Open the Krepšelis (Cart)

    cy.get('.elementor-button--view-cart').eq(0).click({ force: true });
    cy.wait(500);

    ///4.5 Verify that the selected product appears in the cart.

    cy.get('ul.cart-items')
      .find('li.cart-item')
      .should('have.length.greaterThan', 0);

  });
});
```

## 🔄 CI/CD Integration

The repository integrates with GitHub Actions for continuous integration. Tests run automatically on push to the main branch and on pull requests.

GitHub workflow configuration:

```yaml
name: Cypress tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [22.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npx cypress run
```

## 📊 Test Reporting

Cypress automatically generates screenshots failures of test runs. These artifacts are uploaded to GitHub Actions for easy debugging.

For more comprehensive reporting, the project can be configured to use the Cypress Dashboard service:

```bash
npx cypress run --record --key your-project-key
```

## 💻 Environment Configuration

The project supports multiple environments (development, staging, production) through Cypress environment configurations:

```javascript
// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://dev.kimchinamai.com',
    env: {
      apiUrl: 'https://api.dev.kimchinamai.com',
    },
    defaultCommandTimeout: 5000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
  },
});
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Project Maintainer: [anikush-yes](https://github.com/anikush-yes)

---

⭐ Star this repository if you find it useful! ⭐

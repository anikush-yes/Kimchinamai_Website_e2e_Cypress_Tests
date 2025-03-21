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
// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('addItemToCart', (itemName) => {
  cy.visit('/menu');
  cy.contains(itemName).click();
  cy.get('[data-test="add-to-cart-button"]').click();
});

Cypress.Commands.add('getCartItemCount', () => {
  return cy.get('.cart-count').invoke('text');
});
```

## 📝 Test Examples

### Home Page Navigation Test

```javascript
// cypress/e2e/home.spec.js
import HomePage from '../support/pages/HomePage';

describe('Home Page Tests', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('should display restaurant name correctly', () => {
    HomePage.getRestaurantName().should('be.visible');
  });

  it('should navigate to menu page when menu button is clicked', () => {
    HomePage.navigateToMenu();
    cy.url().should('include', '/menu');
  });

  it('should display contact information', () => {
    HomePage.getContactInfo()
      .should('contain', '123-456-7890')
      .and('contain', '123 Korean Food St, Food City');
  });
});
```

### Shopping Cart Test

```javascript
// cypress/e2e/cart.spec.js
import MenuPage from '../support/pages/MenuPage';
import CartPage from '../support/pages/CartPage';

describe('Shopping Cart Tests', () => {
  it('should add item to cart and update cart count', () => {
    // Visit menu page
    MenuPage.visit();
    
    // Add Bibimbap to cart
    MenuPage.addItemToCart('Bibimbap');
    
    // Verify cart count is updated to 1
    cy.getCartItemCount().should('eq', '1');
  });
  
  it('should update item quantity in cart', () => {
    // Add Bulgogi to cart using custom command
    cy.addItemToCart('Bulgogi');
    
    // Visit cart page
    CartPage.visit();
    
    // Update quantity to 3
    CartPage.updateItemQuantity('Bulgogi', 3);
    
    // Verify quantity was updated
    CartPage.getItemQuantity('Bulgogi').should('eq', '3');
    
    // Verify subtotal was updated correctly
    CartPage.getSubtotal().should('match', /\$\d+\.\d{2}/);
  });
  
  it('should remove item from cart', () => {
    // Add item to cart and navigate to cart page
    cy.addItemToCart('Kimchi');
    CartPage.visit();
    
    // Initial cart should have 1 item
    CartPage.getItemCount().should('eq', 1);
    
    // Remove item
    CartPage.removeItem('Kimchi');
    
    // Cart should be empty
    CartPage.getEmptyCartMessage().should('be.visible')
      .and('contain', 'Your cart is empty');
  });
});
```

## 🔄 CI/CD Integration

The repository integrates with GitHub Actions for continuous integration. Tests run automatically on push to the main branch and on pull requests.

GitHub workflow configuration:

```yaml
name: Cypress Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          build: npm run build
          start: npm start
          wait-on: 'http://localhost:3000'
      
      - name: Upload screenshots
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: cypress-screenshots
          path: cypress/screenshots
      
      - name: Upload videos
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: cypress-videos
          path: cypress/videos
```

## 📊 Test Reporting

Cypress automatically generates screenshots on test failures and videos of test runs. These artifacts are uploaded to GitHub Actions for easy debugging.

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

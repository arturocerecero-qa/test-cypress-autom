# rain-cypress
Small framework for automation testing with Rain web app

# Cypress Test Suite with Page Object Model (POM) Framework

This repository contains test cases written in JavaScript using Cypress with a Page Object Model (POM) framework.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone this repository:

```bash
git clone <[repository-url](https://github.com/arturocerecero-qa/rain-cypress.git)> 
```
 
2. Navigate to the project directory:
``` bash
cd <rain-cypress>
```
3. Install the dependencies:
``` bash
npm install
```

## Test Execution
To execute the smoke test cases, run the following command:
```
npm run test:smoke
```

This command will run only the test cases labeled with @smoke using Cypress.

## Project Structure

The project follows the Page Object Model (POM) framework, which promotes code reusability and maintainability.

* **cypress/e2e/tests**: Contains the test files where test cases are defined.
* **cypress/support**: Contains utility files, custom commands, or fixtures used in the tests.
* **cypress/pages**: Contains Page Objects that represent the web pages or components of the application under test.

## Writing Test Cases

To write test cases using Cypress, follow these steps:

1. Create a new test file in the cypress/e2e/tests directory or modify an existing one.
2. Define a test suite using the describe function.
3. Use the beforeEach function to run any setup code before each test case.
4. Use the _**it**_ function to define individual test cases.
5. Write test code using Cypress APIs and assertions.
6. Use Page Objects from the **cypress/pages** directory to encapsulate interactions with web pages or components.

## Customization
You can customize the provided scripts or add more scripts to the package.json file as needed.

For example, you can modify the "test:smoke" script to include additional environment variables or options for the Cypress run command.

## Feedback
If you have any feedback, suggestions, or issues related to this project, please feel free to raise them in the GitHub repository's Issues section.


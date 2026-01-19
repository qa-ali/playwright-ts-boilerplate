# Playwright Boilerplate

This project is a TypeScript-based boilerplate for End-to-End (E2E) testing using [Playwright](https://playwright.dev/). It is configured with best practices, including linting, formatting, and GitHub Actions for CI/CD.

## Prerequisites

- **Node.js**: Latest LTS version recommended (e.g., v18+ or v20+).
- **npm**: Comes bundled with Node.js.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd playwright-boilerplate
    ```

2.  **Install dependencies:**
    ```bash
    npm ci
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install --with-deps
    ```

## Configuration & Setup

1.  **Environment Variables:**
    Copy the example environment file to create your local configuration:
    ```bash
    cp .env.example .env
    ```
    
    Edit the `.env` file if you need to change the defaults (e.g., `BASE_URL`, `SAUCE_USERNAME`).

## Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run tests in UI mode (Interactive):**
  ```bash
  npx playwright test --ui
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/example.spec.ts
  ```

- **Run authentication tests only:**
  ```bash
  npx playwright test --project=chromium-auth
  ```

- **Debug tests:**
  ```bash
  npx playwright test --debug
  ```

## Documentation

For detailed information about the project structure and test data, please refer to the `docs/` directory.

## Code Quality

- **Lint code:** `npm run lint`
- **Format code:** `npm run format`

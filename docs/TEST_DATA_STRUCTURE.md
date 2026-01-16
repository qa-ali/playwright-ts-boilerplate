# Test Data and Reusable Functions Structure

This document explains where to put test data and reusable functions in the Playwright boilerplate.

## Directory Structure

```
playwright-boilerplate/
├── utils/
│   ├── testData/
│   │   └── testData.ts          # Test data (credentials, URLs, locators)
│   └── helpers/
│       └── testHelpers.ts       # Reusable helper functions
├── tests/
│   └── fixtures/
│       └── customFixtures.ts    # Playwright custom fixtures
└── pages/
    ├── BasePage.ts              # Base page object
    └── HomePage.ts              # Page-specific objects
```

## 1. Test Data (`utils/testData/testData.ts`)

**Purpose:** Store all test data in one centralized location

**What to put here:**
- User credentials
- URLs
- Test data objects
- Common locators used across multiple tests

**Example usage:**
```typescript
import { authData, urls, locators } from '../../utils/testData/testData';

test('login test', async ({ page }) => {
    await page.goto(urls.login);
    await page.locator(locators.auth.usernameInput).fill(authData.validUser.username);
});
```

## 2. Helper Functions (`utils/helpers/testHelpers.ts`)

**Purpose:** Store reusable functions that are used 3+ times across tests

**What to put here:**
- Login/logout functions
- Common navigation functions
- Verification helpers
- Data manipulation utilities
- Screenshot helpers

**Example usage:**
```typescript
import { login, addItemToCart, verifyCartBadgeCount } from '../../utils/helpers/testHelpers';

test('add to cart', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
    await addItemToCart(page, 0);
    await verifyCartBadgeCount(page, 1);
});
```

## 3. Custom Fixtures (`tests/fixtures/customFixtures.ts`)

**Purpose:** Automatically initialize page objects and other test dependencies

**What to put here:**
- Page object initialization
- API client setup
- Database connections
- Mock data setup

**Example usage:**
```typescript
import { test, expect } from './fixtures/customFixtures';

test('homepage test', async ({ homePage }) => {
    // homePage is automatically initialized!
    await homePage.goto();
    await homePage.clickGetStarted();
});
```

## 4. Page Objects (`pages/`)

**Purpose:** Encapsulate page-specific logic and locators

**What to put here:**
- Page-specific locators
- Page-specific actions
- Page-specific assertions

**When to use:**
- Use page objects for page-specific logic
- Use helpers for cross-page reusable functions

## Best Practices

### ✅ DO:
- Put data in `testData.ts` if it's used across multiple tests
- Put functions in `testHelpers.ts` if used 3+ times
- Use fixtures for automatic setup/teardown
- Keep page objects focused on single pages

### ❌ DON'T:
- Don't duplicate test data across files
- Don't copy-paste the same function 3+ times
- Don't put business logic in test files
- Don't mix page-specific and generic helpers

## Migration Example

### Before (Repetitive):
```typescript
// test1.spec.ts
test('test 1', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
});

// test2.spec.ts
test('test 2', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
});
```

### After (DRY):
```typescript
// Both tests
import { login } from '../../utils/helpers/testHelpers';
import { authData } from '../../utils/testData/testData';

test('test 1', async ({ page }) => {
    await login(page, authData.validUser.username, authData.validUser.password);
});

test('test 2', async ({ page }) => {
    await login(page, authData.validUser.username, authData.validUser.password);
});
```

## Quick Reference

| What | Where | Example |
|------|-------|---------|
| User credentials | `utils/testData/testData.ts` | `authData.validUser` |
| URLs | `utils/testData/testData.ts` | `urls.inventory` |
| Common locators | `utils/testData/testData.ts` | `locators.auth.loginButton` |
| Login function | `utils/helpers/testHelpers.ts` | `login(page, user, pass)` |
| Cart helpers | `utils/helpers/testHelpers.ts` | `addItemToCart(page, 0)` |
| Page objects | `tests/fixtures/customFixtures.ts` | `{ homePage }` fixture |
| Page-specific logic | `pages/HomePage.ts` | `homePage.clickGetStarted()` |

/**
 * Test data for authentication
 */
export const authData = {
    validUser: {
        username: process.env.SAUCE_USERNAME || 'standard_user',
        password: process.env.SAUCE_PASSWORD || 'secret_sauce',
    },
    lockedUser: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },
    problemUser: {
        username: 'problem_user',
        password: 'secret_sauce',
    },
};

/**
 * Test URLs
 */
export const urls = {
    base: process.env.SAUCE_URL || 'https://www.saucedemo.com',
    login: process.env.SAUCE_URL || 'https://www.saucedemo.com',
    inventory: `${process.env.SAUCE_URL || 'https://www.saucedemo.com'}/inventory.html`,
    cart: `${process.env.SAUCE_URL || 'https://www.saucedemo.com'}/cart.html`,
    checkout: `${process.env.SAUCE_URL || 'https://www.saucedemo.com'}/checkout-step-one.html`,
};

/**
 * Common locators used across multiple tests
 */
export const locators = {
    auth: {
        usernameInput: '[data-test="username"]',
        passwordInput: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        errorMessage: '[data-test="error"]',
    },
    inventory: {
        inventoryList: '.inventory_list',
        inventoryItem: '.inventory_item',
        addToCartButton: '[data-test^="add-to-cart"]',
        removeButton: '[data-test^="remove"]',
    },
    navigation: {
        shoppingCartBadge: '.shopping_cart_badge',
        shoppingCartLink: '.shopping_cart_link',
        menuButton: '#react-burger-menu-btn',
        logoutLink: '#logout_sidebar_link',
    },
};

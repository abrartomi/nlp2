const { validateUrl } = require("../views/js/checkName"); 

describe('URL Validation', () => {
    test('Should return false for invalid URLs', () => {
        expect(validateUrl("invalid-url")).toBeFalsy();
    });

    test('Emails should not be valid URLs', () => {
        expect(validateUrl("mailto:test@example.com")).toBeFalsy();
    });

    test('Valid URLs should return true', () => {
        expect(validateUrl("https://www.example.com")).toBeTruthy();
    });

    test('Empty strings should return false', () => {
        expect(validateUrl("")).toBeFalsy();
    });
});

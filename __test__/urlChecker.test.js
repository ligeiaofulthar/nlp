// Import the js file to test
import { checkUrl } from "../src/client/js/urlChecker"

// jest tutorial https://www.youtube.com/watch?v=7r4xVDI2vho
describe("Testing the urlChecker functionality", () => {
    test("checkUrl() function exists", () => {
        expect(checkUrl).toBeDefined();
    });

    test("checkUrl() should be truthy", () => {
        expect(checkUrl('https://stackoverflow.com/questions/30970068/js-regex-url-validation')).toBeTruthy();
    });

    test("checkUrl() should be falsy", () => {
        expect(checkUrl('//stackoverflow.com/questions/30970068/js-regex-url-validation')).toBeFalsy();
    });
});
// Import the js file to test
// import { handleSubmit } from '../src/client/js/formHandler'
import { fetchData } from '../__mocks__/formHandler'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("fetchData() function exists", () => {
        expect(fetchData).toBeDefined();
    });

    test('url should be passed', async () => {
        await expect(fetchData()).resolves.toStrictEqual({ textUrl: 'http://somewebsite.com' });
    });
});
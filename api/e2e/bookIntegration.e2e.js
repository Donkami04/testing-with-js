const mockGetAll = jest.fn();
const request = require('supertest');
const { generateManyBooks } = require('../fakes/fakebooks');
const createApp = require('../src/app');


jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for get books endpoint', () => {
    let app = null;
    let server = null;
    beforeAll(() => {
        app = createApp();
        server = app.listen(3001);
    });

    afterAll (async () => {
        await server.close();
    });

    describe('Test fot [GET] /api/v1/books /', () => {
        test('Should return a list of books', async () => {
            const fakeBooks = generateManyBooks(5);
            await mockGetAll.mockResolvedValue(fakeBooks);
            return request(app)
                .get('/api/v1/books')
                .expect(200)
                .then(({body}) => {
                    console.log({body})
                    expect(body.length).toEqual(fakeBooks.length);
                    })
        });
    });
});


const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config/index');

describe('Test for get books endpoint', () => {
    let app = null;
    let server = null;
    let database = null;
    beforeAll(async () => {
        app = createApp();
        server = app.listen(3002);
        const client = new MongoClient('mongodb+srv://admin:camilo123@mycluster.ttsjgw9.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        await client.connect();
        database = client.db('demo');
        console.log('OOOKKKKK')
    }, 10000);

    afterAll (async () => {
        await server.close();
        await database.collection('books').drop();
    });

    describe('Test fot [GET] /api/v1/books /', () => {
        test('Should return a list of books', async () => {
            const seedData = await database.collection('books').insertMany([
                {
                name: 'book 1',
                year: 1998,
                author: 'Camilo'
                },
                {
                name: 'book 2',
                year: 2000,
                author: 'Juan'
                }
            ]);
            return request(app)
                .get('/api/v1/books')
                .expect(200)
                .then(({ body }) => {
                    console.log(body)
                    expect(body.length).toEqual(seedData.insertedCount);
                    })
        });
    });
});


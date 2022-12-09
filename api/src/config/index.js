require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.MONGO_URL || 'mongodb+srv://admin:camilo123@mycluster.ttsjgw9.mongodb.net/?retryWrites=true&w=majority',
  dbName: process.env.MONGO_DB_NAME || 'demo',
  dbTestUrl: process.env.MONGO_TEST_URL || 'mongodb+srv://admin:camilo123@cluster0.egcio3d.mongodb.net/?retryWrites=true&w=majority',
  dbTestName: process.env.MONGO_TEST_DB_NAME || 'testdb',
};

module.exports = { config };

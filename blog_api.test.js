/* eslint-disable linebreak-style */


const mongoose = require('mongoose') // We are determining variable "mongoose", which have to use that mongoose =>  mongoDb library

const supertest = require('supertest') // We initalize supertest, which have to use that "supertest library "
const app = require('../app') // We initalize app function, which have to that app library and actual "app.js" file
const api = supertest(app) // We initalize api, which import of determined app.js to express application  with wrapping of  supertest




beforeAll(async () => {
  const database = 'mongodb+srv://christoforp:christoforp@cluster0.osmk6.mongodb.net/myPhonebook?retryWrites=true&w=majority'
  mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true })
})





// We are using beforeEach function, which purpose is to use that "async" syntax method and implement things inside of {...}
// This means that if we run test with commant => "npm run test", then it conduct things inside of that {...}
// "before me moving to first test of "test"(), then we conduct things inside of that function
// That function saves database both  of zero and first array of "helper.defaultValues"map"
// If we would like save several array at sime time when we initialize that.



// There is still some problems with operation because  if we are using "forEach" loop, which generate its own  asynchronous operation, what beforeEach does not wait.
// So await commands inside of forEach loop does not presenting beforeEach function, So they have separated function
// Execution of test starts after beforeEach function therefore we can run test before we have been initialized  database.
// Possible and fixed way in this situation could be that if we waiting that all asynchronous operation execution have been finished with promise method.


// We are determining independent testcases with function of test. Where we using that async syntax method and it conduct things inside of that function
test('checking if blogs 1 value in database', async() => { // It print that text of test in console, when we conduct that test
  const response = await api.get('/api/blogs') // We initialize variable response, which get value await "api.get('/api/blogs") So it wait when that => api.get('/api/blogs') have been conducted.
  expect(response.body).toHaveLength[1] // We exploring correctness of answering data with expect(response.bodymethod) jest
  // If it get value of 1, then test works correctly if not then it would be error.

})





// We are determining independent testcases with function of test with async syntax method. // So we are conducting things inside of that {...} function
test('blogs are returned as json', async() => {
  await api // There is seen syntax await before method call for api object
    .get('/api/blogs')  // Test method HTTP request making request with ('api/persons)
    .expect(200)         // We are making sure that we answering request with statuscode(200)
    .expect('Content-Type',  /application\/json/) // We also making sure that it return that data in correct mode that it => Content-Type' /application\json/)
  console.log('entered text') // Print that text visible in terminal&console
})



afterAll(() => { // We are using afterAll method  of jest, which purpose is to close connection to database after all test have been conducted.
  mongoose.connection.close() // "mongoose.connection(close)" purpose is to stop and remove  connection into MongoDB database.
})




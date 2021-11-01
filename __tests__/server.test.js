'use strict';

const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {

    test('/home work', async () => {       // Check if server is alive
        const response = await mockRequest.get('/home');
        expect(response.status).toBe(200);
    });

    test('Should respond with 404 status on an invalid method', async () => {      // Check if 404 is handled 
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });

    test('should respond with 500 on an error', async () => {     // Check if general error handling is working
        const response = await mockRequest.get('/error');
        expect(response.status).toBe(500);

    });

});
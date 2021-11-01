'use strict';

const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(server);

describe(' validator middleware', () => {


    test('check the status of person route', async () => {
        let response = await mockRequest.get('/person?name=Dima');
        expect(response.status).toBe(200);
    });

    test(' check user input valid', async () => {
        const response = await mockRequest.get('/person?name=Dima');
        expect(response.body.name).toBe('Dima');
    });

})


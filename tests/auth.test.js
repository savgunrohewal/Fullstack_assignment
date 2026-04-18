const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {

  test('Register success', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'new@test.com',
      password: '123456'
    });
    expect(res.statusCode).toBe(201);
  });

  test('Register existing user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'test@test.com',// already exists from previous test
      password: '123456' // same password as previous test
    });
    expect(res.statusCode).toBe(400);
  });

  test('Register missing fields', async () => {
    const res = await request(app).post('/api/auth/register').send({});
    expect(res.statusCode).toBe(400);
  });

  test('Login success', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@test.com',
      password: '123456'
    });
    expect(res.statusCode).toBe(200);
  });

  test('Login wrong password', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@test.com',
      password: 'wrong'
    });
    expect(res.statusCode).toBe(400);
  });

});

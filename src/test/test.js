const request = require('supertest');
const app = require('../app'); // Your Express app

describe('CRUD Operations', () => {
  it('should create a new person', async () => {
    const response = await request(app)
      .post('/api')
      .send({ name: 'Mark Essien' });

    expect(response.statusCode).toBe(201);
  });

  it('should fetch details of a person', async () => {
    const response = await request(app).get('/api/1');

    expect(response.statusCode).toBe(200);
  });

  it('should modify the details of an existing person', async () => {
    const response = await request(app)
      .put('/api/1')
      .send({ name: 'Updated Name' });

    expect(response.statusCode).toBe(200);
  });

  it('should remove a person', async () => {
    const response = await request(app).delete('/api/1');

    expect(response.statusCode).toBe(204);
  });
});

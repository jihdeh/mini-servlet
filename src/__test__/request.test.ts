import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../example';

describe('Recipe routes', () => {
  describe('GET /recipes', () => {
    test('should return 200 and all recipes', async () => {
      await request(app).get('/recipes').send().expect(httpStatus.BAD_REQUEST);
    });
  });
});

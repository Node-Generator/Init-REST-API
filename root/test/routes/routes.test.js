import request from 'supertest';
import routes from '../../src/routes/routes';

describe('Routes', () => {
  it('should return the success message', (done) => {
    request(routes)
      .get('/')
      .expect(200, { message: 'success' }, done);
  });
  it('should return the error message', (done) => {
    request(routes)
      .get('/error')
      .expect(400, { message: 'Bad Request' }, done);
  });
});

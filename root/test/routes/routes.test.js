import request from 'supertest';
import routes from '../../src/routes/routes';

describe('Routes', () => {
  it('should return the success message', (done) => {
    request(routes)
      .get('/')
      .expect({ message: 'success' }, done);
  });
});

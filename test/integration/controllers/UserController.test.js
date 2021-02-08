const assert = require('assert');
const supertest = require('supertest');
const {v4} = require('uuid');

describe('UserController#Controller', () => {
  it('#auth()', async () => {
    supertest(sails.hooks.http.app)
      .post('/auth')
      .send({
        login: 'admin',
        password: 'admin',
      }).end((err, res) => {
        assert(!err);
        assert(res.body);
        assert(res.body.token !== null);
        assert(res.body.user !== null);
      });
  });
  it('#register()', async () => {
    supertest(sails.hooks.http.app)
      .post('/users')
      .send({
        login: `controller${v4()}`,
        password: 'Controll3r!',
        confirmationPassword: 'Controll3r!'
      }).end((err, res) => {
        assert(!err);
        assert(res.body);
        assert(res.body.id);
        assert(res.body.login);
      });
  });
});

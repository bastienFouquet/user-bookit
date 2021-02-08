const assert = require('assert');

describe('authByCredentials#Helper', () => {
  it('should authenticate', async () => {
    const auth = await sails.helpers.authByCredentials.with({
      login: 'admin',
      password: 'admin'
    });
    assert(auth);
    assert(auth.token);
  });
});

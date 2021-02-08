const assert = require('assert');
const bcrypt = require('bcryptjs');

describe('hashPassword#Helper', () => {
  it('should hash password', async () => {
    const password = 'admin';
    const hashPassword = await sails.helpers.hashPassword.with({
      password
    });
    assert(bcrypt.compareSync(password, hashPassword));
  });
});

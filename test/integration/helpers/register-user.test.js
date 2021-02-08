const assert = require('assert');
const {v4} = require('uuid');

describe('registerUser#Helper', () => {
  it('should register a user', async () => {
    const user = await sails.helpers.registerUser.with({
      login: `helper${v4()}`,
      password: 'TE3sttest',
      confirmationPassword: 'TE3sttest'
    });
    assert(user);
    assert(user.id);
  });
});

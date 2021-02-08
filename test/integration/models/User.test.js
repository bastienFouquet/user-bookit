const assert = require('assert');

describe('User#Model', () => {
  describe('GET', () => {
    it('Should get Users and check attributes', async () => {
      const users = await User.find().limit(1);
      assert(users);
      const user = users[0];
      assert(user);
      assert(user.id !== null);
      assert(user.login !== null);
      assert(user.password !== null);
      assert(user.roleId !== null);
      assert(user.createdAt !== undefined);
      assert(user.updatedAt !== undefined);
    });
  });
});

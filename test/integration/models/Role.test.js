const assert = require('assert');

describe('Role#Model', () => {
  describe( 'GET', () => {
    it('Should get Roles and check attributes', async () => {
      const roles = await Role.find().limit(1);
      assert(roles);
      const role = roles[0];
      assert(role);
      assert(role.id !== null);
      assert(role.value !== null);
      assert(role.createdAt !== undefined);
      assert(role.updatedAt !== undefined);
    } );
  });
});

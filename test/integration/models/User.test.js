const {v4} = require('uuid');
const assert = require('assert');

describe('User#Model', () => {
  describe('POST', () => {
    it('Should create Users and check ', async () => {
      const adminRole = await Role.findOne({label: 'Admin'});
      const id = v4();
      const createdUser = await User.create({
        id: id,
        login: `test${id}`,
        password: 'test',
        role: adminRole.id
      }).fetch();
      assert(createdUser);
      assert(createdUser.id !== null);
    });
  });

  describe('GET', () => {
    it('Should get Users and check attributes', async () => {
      const users = await User.find().limit(1);
      assert(users);
      if (users.length > 0) {
        const user = users[0];
        assert(user);
        assert(user.id !== null);
        assert(user.login !== null);
        assert(user.password !== null);
        assert(user.role !== null);
        assert(user.createdAt !== undefined);
        assert(user.updatedAt !== undefined);
      }
    });
  });

  describe('PUT', () => {
    it('Should update User and check', async () => {
      const user = (await User.find({login: {contains: 'test'}}).limit(1))[0];
      const updatedUser = await User.updateOne({id: user.id})
        .set({
          login: `update${user.id}`,
        });
      assert(updatedUser);
      assert(updatedUser.login === `update${user.id}`);
    });
  });

  describe('DELETE', () => {
    it('Shoul delete a user and check', async () => {
      const user = (await User.find({login: {contains: 'update'}}).limit(1))[0];
      const deletedUser = await User.destroyOne({id: user.id});
      assert(deletedUser);
    });
  });
});

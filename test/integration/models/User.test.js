const {v4} = require('uuid');
const assert = require('assert');

const newUserId = v4();
const userNewId= v4();

describe('User#Model', () => {
  describe('POST', () => {
    it('Should create Users and check ', async () => {
      var createdUser = await User.create({
        id: newUserId,
        login: 'test',
        password: 'test',
        roleId: Role.findOne({ value: 'Admin'}).id
      }).fetch();
      assert(createdUser);

    });
  });

  describe('GET', () => {
    it('Should get User and check attributes', async () => {
      const users = await User.find().limit(1);
      assert(users);
      const user = users[0];
      assert(user);
      assert(user.id !== null);
      assert(user.login !== null);
      assert(user.password !== null);
      assert(user.roleId !== null);
      assert(user.createdAt !== null);
      assert(user.updatedAt !== null);
    });
  });

  describe('PUT', () => {
    it('Should update User and check', async () => {
      const idRoleAdmin = (await Role.find({ value: 'Admin'}))[0].id;
      const updatedUser = await User.updateOne({id: newUserId})
        .set({
          id: userNewId,
          login: 'TESTE',
          password: 'TESTE',
          roleId: idRoleAdmin
        });

      assert(updatedUser.id === userNewId);
      assert(updatedUser.login === 'TESTE');
      assert(updatedUser.password === 'TESTE');
      assert(updatedUser.roleId === idRoleAdmin);
      assert(updatedUser.createdAt !== null);
      assert(updatedUser.updatedAt !== null);
    });
  });

  describe('DELETE', () => {
    it( 'Shoul delete a user and check', async () => {
      const deletedUser = await User.destroy({id: userNewId}).fetch();

      assert(deletedUser[0].id === userNewId);
    });
  });
});

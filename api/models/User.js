/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users', primaryKey: 'id',
  attributes: {
    id: {type: 'string', unique: true, required: true},
    login: {type: 'string'},
    password: {type: 'string'},
    role: {model: 'role', columnName: 'role_id'},
    createdAt: {type: 'ref', columnType: 'datetime', autoCreatedAt: true},
    updatedAt: {type: 'ref', columnType: 'datetime', autoUpdatedAt: true}
  },
};

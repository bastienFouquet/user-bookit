/**
 * Role.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'roles', primaryKey: 'id',
  attributes: {
    id: {type: 'string', unique: true, required: true},
    label: {type: 'string', unique: true},
    createdAt: {type: 'ref', columnType: 'datetime', autoCreatedAt: true},
    updatedAt: {type: 'ref', columnType: 'datetime', autoUpdatedAt: true}
  },

};


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
    value: {type: 'string'},
    createdAt: {type: 'ref', columnType: 'datetime'},
    updatedAt: {type: 'ref', columnType: 'datetime'}
  },

};


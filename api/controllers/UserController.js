/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {v4} = require('uuid');
module.exports = {
  auth: async (req, res) => {
    try {
      const connection = await sails.helpers.authByCredentials.with({
        login: req.body.login,
        password: req.body.password
      });
      if (connection) {
        return res.json(connection);
      } else {
        return res.badRequest('Credentials not match');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  register: async (req, res) => {
    try {
      const user = await sails.helpers.registerUser.with({
        id: v4(),
        login: req.body.login,
        password: req.body.password,
        confirmationPassword: req.body.confirmationPassword
      });
      if (user) {
        return res.json(user);
      } else {
        return res.badRequest('Fields required');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};


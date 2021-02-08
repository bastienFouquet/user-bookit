const passwordValidator = require('password-validator');
const {v4} = require('uuid');
const passValidator = new passwordValidator();
passValidator.is().min(8)
  .has().uppercase()
  .has().lowercase()
  .has().digits(1)
  .has().not().spaces();

module.exports = {
  friendlyName: 'Register user',
  description: '',
  inputs: {
    login: {
      type: 'string',
      allowNull: true
    },
    password: {
      type: 'string',
      required: true
    },
    confirmationPassword: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
    error: {
      description: 'An error occured',
    }
  },
  fn: async function (inputs, exits) {
    try {
      if (inputs.password === inputs.confirmationPassword) {
        if (passValidator.validate(inputs.password)) {
          const userRole = (await Role.find({label: 'User'}))[0];
          const user = await User.create({
            id: v4(),
            login: inputs.login,
            password: inputs.password,
            role: userRole.id,
          }).fetch();
          if (user) {
            delete user.password;
            return exits.success(user);
          } else {
            return exits.error({register: false, message: 'Error'});
          }
        } else {
          return exits.error({register: false, message: 'Error'});
        }
      } else {
        return exits.error({register: false, message: 'Error'});
      }
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

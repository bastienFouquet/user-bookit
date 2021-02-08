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
      required: true
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
          const userRole = await Role.findOne({label: 'User'});
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
          return exits.error({register: false, message: 'Password must have 8 chars, lowercase, uppercase, 1 digits and contains no spaces'});
        }
      } else {
        return exits.error({register: false, message: 'Password and confirmation not match'});
      }
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

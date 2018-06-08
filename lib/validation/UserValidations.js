var joi = require('joi');

const customValidate = joi.extend({
  base: joi.string(),
  name: 'string',
  language: {
    passwordErr: 'password must not contain name'
  },
  rules: [{
    name: 'checkPW',
    validate(param, value, state, options) {// state.parent luu object trong req.body
      if (value.includes(state.parent.name)) {
        return this.createError('string.passwordErr', {}, state, options);
      } else {
        return value;
      }
    }
  }]
});

module.exports = {
  register: {
    body: {
      name: joi.string().options({
        language: {
          string: {
            base: "not a string"
          }
        }
      }),
      encrypt_password: customValidate.string().checkPW()
    }
  }
}

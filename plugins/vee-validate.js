import Vue from 'vue'
import * as VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'

Validator.extend('upperAndLowerCase', {
  getMessage: (field) =>
    'The ' + field + ' must contain upper and lower case letters.',
  validate: (value) =>
    value.match(/[A-Z]/g) !== null && value.match(/[a-z]/g) !== null,
})

Validator.extend('numberOrSpecial', {
  getMessage: (field) =>
    'The ' + field + ' must contain one number or one special character',
  validate: (value) => value.match(/^[a-zA-Z ]*$/) === null,
})

Vue.use(VeeValidate, {
  inject: true,
})

const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    'string.base': 'El usuario debe ser texto',
    'string.min': 'El usuario debe tener al menos {#limit} caracteres',
    'any.required': 'El usuario es obligatorio',
  }),
  email: Joi.string().email().max(100).required().messages({
    'string.email': 'El email no es válido',
    'any.required': 'El email es obligatorio',
  }),
  password: Joi.string().min(6).max(100).required().messages({
    'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
    'any.required': 'La contraseña es obligatoria',
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().max(100).required().messages({
    'string.email': 'El email no es válido',
    'any.required': 'El email es obligatorio',
  }),
  password: Joi.string().min(6).max(100).required().messages({
    'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
    'any.required': 'La contraseña es obligatoria',
  }),
});

module.exports = { registerSchema, loginSchema };
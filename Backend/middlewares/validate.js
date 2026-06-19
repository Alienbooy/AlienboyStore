module.exports = (schema) => (req, res, next) => {
  const options = { abortEarly: false, stripUnknown: true, convert: true };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    const details = error.details.map(d => d.message);
    return res.status(400).json({ error: details[0], details });
  }
  req.validatedBody = value;
  return next();
};
const validateParams = (params, schema) => {
  const errors = [];

  for (const key in schema) {
    const rule = schema[key];
    const value = params[key];

    if (rule.required && (value === undefined || value === "")) {
      errors.push(`${key} is required.`);
      continue;
    }

    if (value !== undefined && typeof value !== rule.type) {
      errors.push(`${key} should be of type ${rule.type}.`);
    }
  }

  return errors;
};

module.exports = { validateParams };

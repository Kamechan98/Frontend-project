type ValidationRules<T> = {
    [K in keyof T]: (value: T[K]) => string | undefined;
  };
  
  type ValidationErrors<T> = {
    [K in keyof T]?: string;
  };
  
  function validateForm<T>(formData: T, validationRules: ValidationRules<T>): ValidationErrors<T> {
    const errors: ValidationErrors<T> = {};
  
    for (const key in validationRules) {
      if (Object.prototype.hasOwnProperty.call(validationRules, key)) {
        const rule = validationRules[key];
        const value = formData[key];
  
        const error = rule(value);
  
        if (error) {
          errors[key] = error;
        }
      }
    }
  
    return errors;
  }

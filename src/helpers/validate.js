import validator from "validator";

export const validate = values => {
  const errors = {};
  if (values.id) {
    if (validator.isEmpty(values.id)) {
      errors.id = "Поле обязательное для заполнения";
    }
  } else {
    errors.id = "Поле обязательное для заполнения";
  }

  if (values.firstName) {
    if (validator.isEmpty(values.firstName)) {
      errors.firstName = "Поле обязательное для заполнения";
    }
    if (!validator.isAlpha(values.firstName)) {
      errors.firstName = "Поле должно содержать только буквы";
    }
  } else {
    errors.firstName = "Поле обязательное для заполнения";
  }

  if (values.lastName) {
    if (validator.isEmpty(values.lastName)) {
      errors.lastName = "Поле обязательное для заполнения";
    }
    if (!validator.isAlpha(values.lastName)) {
      errors.lastName = "Поле должно содержать только буквы";
    }
  } else {
    errors.lastName = "Поле обязательное для заполнения";
  }

  if (values.email) {
    if (validator.isEmpty(values.email)) {
      errors.email = "Поле обязательное для заполнения";
    }
    if (!validator.isEmail(values.email)) {
      errors.email = "Введите корректный email";
    }
  } else {
    errors.email = "Поле обязательное для заполнения";
  }

  if (values.phone) {
    if (validator.isEmpty(values.phone)) {
      errors.phone = "Поле обязательное для заполнения";
    }
    if (!validator.isNumeric(values.phone)) {
      errors.phone = "Поле должно содержать только цифры";
    }
  } else {
    errors.phone = "Поле обязательное для заполнения";
  }
  return errors;
};

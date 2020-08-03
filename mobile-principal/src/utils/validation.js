import * as yup from "yup";
import {
  errorInvalidPattern,
  ERROR_EMAIL,
  ERROR_PASSWORD_LENGTH,
  ERROR_REQUIRED,
  PATTERN_PHONE,
  ERROR_STRING_LENGTH,
  PATTERN_ZIP_CODE,
  PATTERN_DATE,
  VERIFY_EMAIL,
  PATTERN_EMAIL,
  ERROR_PASSWORD_NOT_MATCH 
} from '../config/constant';

const equalTo = (ref, msg) => {
  return yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path
    },
    test(value) {
      return value === this.resolve(ref);
    }
  });
}

yup.addMethod(yup.string, "equalTo", equalTo);

const emailOrUsername = yup.lazy(value => {

  if (VERIFY_EMAIL.test(value)) {
    return yup.string()
      .trim()
      .matches(PATTERN_EMAIL, ERROR_EMAIL)
      .required(ERROR_REQUIRED);
  }

  return yup
    .string()
    .trim()
    .required(ERROR_REQUIRED)
    .min(3, ERROR_STRING_LENGTH);

})

const email = yup
  .string()
  .trim()
  .matches(PATTERN_EMAIL, ERROR_EMAIL)
  .required(ERROR_REQUIRED);

const password = yup
  .string()
  .trim()
  .min(8, ERROR_PASSWORD_LENGTH)
  .required(ERROR_REQUIRED);

const zipcode = yup
  .string()
  .trim()
  .matches(PATTERN_ZIP_CODE, errorInvalidPattern('06474-521'))
  .required(ERROR_REQUIRED);

const state = yup.string().notOneOf(["0"], "Selecione um estado").required(ERROR_REQUIRED);

const city = yup.string().notOneOf(["0"], "Selecione uma cidade").required(ERROR_REQUIRED);

const gender = yup.string().notOneOf(["0"], "Selecione um sexo").required(ERROR_REQUIRED);

const neighborhood = yup
  .string()
  .trim()
  .required(ERROR_REQUIRED);

const street = yup
  .string()
  .trim()
  .required(ERROR_REQUIRED);

const number = yup
  .string()
  .trim()
  .required(ERROR_REQUIRED);

const name = yup
  .string()
  .trim()
  .required(ERROR_REQUIRED)
  .min(3, ERROR_STRING_LENGTH);

const phone = yup
  .string()
  .trim()
  .matches(PATTERN_PHONE, errorInvalidPattern("11 4157-5145 | 11 96521-9852"))
  .required(ERROR_REQUIRED);

const date = yup
  .string()
  .trim()
  .matches(PATTERN_DATE, errorInvalidPattern("DD/MM/AAAA"))
  .required(ERROR_REQUIRED);

export const loginFormSchema = yup.object().shape({
  username: emailOrUsername,
  password
})

export const addressFormSchema = yup.object().shape({
  zipcode,
  state,
  city,
  neighborhood,
  street,
  number,
  complement: yup.string().trim(),
});

export const personFormSchema = yup.object().shape({
  email,
  namePerson: name,
  phonePerson: phone,
  gender,
  dateBirth: date
});

export const userFormSchema = yup.object().shape({
  password,
  username: name,
  confirmPassword: yup
    .string()
    .equalTo(yup.ref('password'), ERROR_PASSWORD_NOT_MATCH)
    .required(ERROR_REQUIRED),
});
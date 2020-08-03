import * as yup from "yup";
import { cnpj } from "cpf-cnpj-validator";
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
  PATTERN_CNPJ,
  ERROR_CNPJ,
} from "../config/constant";

const equalTo = (ref, msg) => {
  return yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
};

const cnpjValid = (ref, msg) => {
  return yup.mixed().test({
    name: "cnpjValid",
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path,
    },
    test(value) {
      return cnpj.isValid(value);
    },
  });
};

yup.addMethod(yup.string, "equalTo", equalTo);
yup.addMethod(yup.string, "cnpjValid", cnpjValid);

const emailOrUsername = yup.lazy((value) => {
  if (VERIFY_EMAIL.test(value)) {
    return yup
      .string()
      .trim()
      .matches(PATTERN_EMAIL, ERROR_EMAIL)
      .required(ERROR_REQUIRED);
  }

  return yup
    .string()
    .trim()
    .required(ERROR_REQUIRED)
    .min(3, ERROR_STRING_LENGTH);
});

const cnpjYup = yup.lazy((value) => {
  if (value.length === 18) {
    return yup.string().cnpjValid(yup.ref("cnpj"), "Este cnpj não é válido");
  } else {
    return yup
      .string()
      .trim()
      .matches(PATTERN_CNPJ, ERROR_CNPJ)
      .required(ERROR_REQUIRED);
  }
});

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
  .matches(PATTERN_ZIP_CODE, errorInvalidPattern("06474-521"))
  .required(ERROR_REQUIRED);

const state = yup
  .string()
  .notOneOf(["0"], "Selecione um estado")
  .required(ERROR_REQUIRED);

const city = yup
  .string()
  .notOneOf(["0"], "Selecione uma cidade")
  .required(ERROR_REQUIRED);

const neighborhood = yup.string().trim().required(ERROR_REQUIRED);

const street = yup.string().trim().required(ERROR_REQUIRED);

const number = yup.string().trim().required(ERROR_REQUIRED);

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

export const loginFormSchema = yup.object().shape({
  username: emailOrUsername,
  password,
});

export const userFormSchema = yup.object().shape({
  email,
  nameUserEstablishment: name,
  phoneUserEstablishment: phone,
  positions: yup.string().required(ERROR_REQUIRED),
});

export const establishmentFormSchema = yup.object().shape({
  nameEstablishment: name,
  instagram: name,
  facebook: name,
});

export const branchFormSchema = yup.object().shape({
  nameBranch: name,
  phoneBranch: phone,
  cnpj: cnpjYup,
  typePlace: yup
    .string()
    .notOneOf(["0"], "Selecione um tipo")
    .required(ERROR_REQUIRED),
});

export const personFormSchema = yup.object().shape({
  password,
  username: name,
});

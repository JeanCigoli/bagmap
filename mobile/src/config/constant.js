export const PATTERN_NUMBER = /[\d]/g;
export const PATTERN_STRING = /[a-zA-Z]/g;
export const PATTERN_STRING_NUMBER = /[a-zA-Z\d ]/g;
export const PATTERN_PHONE = /[\d]{2} ([\d]{5}|[\d]{4})-[\d]{4}/;
export const PATTERN_ZIP_CODE = /[\d]{5}-[\d]{3}/;
export const PATTERN_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PATTERN_DATE = /\d{4}-\d{1,2}-\d{1,2}/;
export const VERIFY_EMAIL = /[a-zA-z]+@/;
export const PATTERN_CNPJ = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/;

export const TOKEN = "@BagMap:token";
export const FIRST_ACCESS = "@BagMap:first_access";
export const USER_AUTENTICATE = "@BagMap:user";
export const ERROR_STRING_LENGTH = "Este campo deve conter no mínimo 3 caracteres";
export const DEFAULT_REQUEST_ERROR_MESSAGE = "Falha ao se conectar ao servidor, tente novamente mais tarde!";
export const ERROR_EMAIL = "Valor inserido não é um e-mail";
export const ERROR_CNPJ =
  "Valor fora do padrão";
export const ERROR_INVALID_PATTERN = "Valor fora do padrão desejado";
export const ERROR_PASSWORD_LENGTH =
  "A senha deve conter no mínimo 8 caracteres.";

export const ERROR_REQUIRED = "Este campo é obrigatório";

export const errorInvalidPattern = exemplo => {
  return `${ERROR_INVALID_PATTERN}. Exemplo: "${exemplo}"`;
};

export const GENDERS = [
    {
      id: "M",
      name: "Masculino"
    },
    {
      id: "F",
      name: "Feminino"
    },
    {
      id: "NI",
      name: "Não quero responder"
    }
  ]
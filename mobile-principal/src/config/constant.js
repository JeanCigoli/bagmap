export const PATTERN_NUMBER = /[\d]/g;
export const PATTERN_STRING = /[a-zA-Z]/g;
export const PATTERN_STRING_NUMBER = /[a-zA-Z\d ]/g;
export const PATTERN_PHONE = /[\d]{2} ([\d]{5}|[\d]{4})-[\d]{4}/;
export const PATTERN_ZIP_CODE = /[\d]{5}-[\d]{3}/;
export const PATTERN_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PATTERN_DATE = /\d{1,2}\/\d{1,2}\/\d{4}/;
export const VERIFY_EMAIL = /[a-zA-z]+@/;
 
export const DATA_USER = "@Bagmap:data_user";
export const TOKEN = "@BagMap:token";
export const FIRST_ACCESS = "@Bagmap:first_access";
export const ERROR_STRING_LENGTH = "Este campo deve conter no mínimo 3 caracteres";
export const ERROR_PASSWORD_NOT_MATCH = "As senhas devem ser iguais";
export const DEFAULT_REQUEST_ERROR_MESSAGE = "Falha ao se conectar ao servidor, tente novamente mais tarde!";
export const ERROR_EMAIL = "Valor inserido não é um e-mail";
export const ERROR_INVALID_PATTERN = "Valor fora do padrão desejado";
export const ERROR_PASSWORD_LENGTH =
  "A senha deve conter no mínimo 8 caracteres.";

export const ERROR_REQUIRED = "Este campo é obrigatório";

export const errorInvalidPattern = exemplo => {
  return `${ERROR_INVALID_PATTERN}. Exemplo: "${exemplo}"`;
};

export const GENDERS = [
  {
    value: "M",
    label: "Masculino",
  },
  {
    value: "F",
    label: "Feminino"
  },
  {
    value: "NI",
    label: "Não quero responder"
  }
];
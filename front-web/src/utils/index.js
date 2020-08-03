import { DEFAULT_REQUEST_ERROR_MESSAGE, TOKEN } from "../config/constants";
import { toast } from "react-toastify";
import imageCompression from 'browser-image-compression';
import { EXTENSION_IMAGE } from 'config/constants';

export const getFullYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (year);
};

/**
 *
 * @param {Error} error
 */
export const requestError = error => {
  const { response } = error;

  if (!response) {
    return toast.error(DEFAULT_REQUEST_ERROR_MESSAGE);
  }

  let result;

  if(Array.isArray(response.data.errors)) {
    result = response.data.errors.map(error => {
      toast.error(error);
    });
  } else if (response.data.status === 500) {
    toast.error("Ops, ocorreu um erro no servidor!");
  }



  return result;
};

export function isBackspace(event) {
  return event.nativeEvent.inputType === "deleteContentBackward";
}

export function getToken() {
  const token = localStorage.getItem(TOKEN);

  return token;
}

export const compressedFile = async file => {

  if (EXTENSION_IMAGE.indexOf(file.type) !== -1) {

    try {

      const options = {
        maxSizeMB: 1.0,
        onProgress: () => { },
      }

      const compressedFile = await imageCompression(file, options);

      return compressedFile;

    } catch (error) {
      return null
    }

  } else if (file.size < 2000000) {
    return file;
  }

  return null;
}

export const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  return date.toLocaleString('pt-BR');
};

export const getTokenUrl = (location) => {
  const { search } = location;

  const queryParams = search.split('r=');
  const token = queryParams[1];

  return token;
};

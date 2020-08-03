import { isBackspace } from ".";
import { PATTERN_NUMBER } from "config/constants";

export const filterNumber = (event) =>
  !isBackspace(event)
    ? event.target.value.replace(PATTERN_NUMBER, "")
    : event.target.value;

export const filterText = (event) =>
  !isBackspace(event)
    ? event.target.value.replace(/[^ a-zA-ZÀ-ú]+/g, "")
    : event.target.value;

export const filterTextNumber = (event) =>
  !isBackspace(event)
    ? event.target.value.replace(/[^ a-zA-ZÀ-ú\d]+/g, "")
    : event.target.value;

export const zipCodeMask = (event) =>
  !isBackspace(event)
    ? event.target.value.replace(/[^\d]/g, "").replace(/^(\d{5})(\d)/, "$1-$2")
    : event.target.value;

export const DaysMask = (event) =>
  !isBackspace(event)
    ? event.target.value.replace(/([^\d\s/-])/g, "")
    : event.target.value;

export const phoneMask = (event) =>
  !isBackspace(event)
    ? event.target.value
        .replace(/[^\d]/g, "")
        .replace(/^(.{0})/, "$1")
        .replace(/^(.{2})/, "$1 ")
        .replace(/^(.{7})(.)/, "$1-$2")
    : event.target.value.replace(/^(.{7})(.)/, "$1-$2");

export const cellphoneMask = (event) =>
  !isBackspace(event)
    ? event.target.value
        .replace(/[^\d]/g, "")
        .replace(/^(.{0})/, "$1")
        .replace(/^(.{2})/, "$1 ")
        .replace(/^(.{8})/, "$1-")
    : event.target.value;

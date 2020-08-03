import React from "react";
import ReactTooltip from "react-tooltip";
import { FaInfoCircle } from 'react-icons/fa';
import { ErrorInfo, InformationError } from "./styled";

export const Error = ({ ...props }) => {
  const { error, name, marginRight } = props;
  return (
    <>
      <InformationError marginRight={marginRight ? true : false} data-event='click focus' data-tip="custom show" data-for={name}>
        <FaInfoCircle />
      </InformationError>

      <ReactTooltip
        className="tooltip"
        id={name}
        globalEventOff='click'
        place="left"
        type="error"
        effect="solid"
      >
        <ErrorInfo>{error && error.message}</ErrorInfo>
      </ReactTooltip>
    </>
  );
};

import React from 'react';
import { getToken } from '../../utils';
import { useSelector } from "react-redux";


const ValidRoute = ({ children }) => {

  const signed = useSelector((state) => state.auth.signed);

  return signed ?
    (
      <>
        {children}
      </>
    )
    :
    ("");

}

export default ValidRoute;

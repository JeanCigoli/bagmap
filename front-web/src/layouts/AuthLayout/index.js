import React from 'react';
import { ContainerMain } from './styled';

const AuthLayout = ({ children }) => {
  return (
    <ContainerMain>
      {children}
    </ContainerMain>
  );
}

export default AuthLayout;

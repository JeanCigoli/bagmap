import React, { memo } from 'react';
import { Error } from "../Error";
import { Container, Label, ContainerInput, ContainerInputError, SvgChilden } from './styled';

const Input = React.forwardRef(({ children, ...props }, ref) => {

  const { name, label, errors, type, margin} = props;

  return (
    <Container>
      <Label htmlFor={name}>
        {label}
      </Label>
      <ContainerInputError>

        <ContainerInput>
          <input
            type={type}
            errors={errors}
            ref={ref}
            name={name}
            {...props} />
        </ContainerInput>

        {errors && <Error name={name} marginRight={margin || children ? true : false} error={errors} />}

        {children ? (<SvgChilden>{children}</SvgChilden>) : null}

      </ContainerInputError>
    </Container>
  );
});

export default memo(Input);

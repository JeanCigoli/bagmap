import React from "react";
import { Error } from "../Error";
import { Container, Label } from "../Input/styled";
import { Textarea } from "./styled";

const TextArea = React.forwardRef((props, ref) => {
  const { errors, name, maxLength, label } = props;
  return (
    <Container style={{ height: '100%' }}>
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        id={name}
        name={name}
        errors={errors}
        ref={ref}
        maxLength={maxLength}
        {...props}
      />
      {errors && <Error name={name} errors={errors} />}
    </Container>
  );
});

export default TextArea;

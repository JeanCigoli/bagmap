import React, { memo } from "react";
import { Error } from "../Error";
import { Container, ContainerInputError, Label, ContainerInput } from "../Input/styled";
import { SelectField } from "./styled";

const Select = React.forwardRef(({ ...props }, ref) => {
  const {
    name,
    type,
    options,
    errors,
    label,
    disable,
    data
  } = props;

  const valueSelected =
    options &&
    options.find(
      ({ uf, name: optionName }) =>
        data === uf || data === optionName
    );

  return (
    <Container>

      <Label htmlFor={name}>
        {label}
      </Label>

      <ContainerInputError>

        <ContainerInput>
          <SelectField
            id={name}
            name={name}
            errors={errors}
            type={type}
            ref={ref}
            disabled={disable}
            value={valueSelected && valueSelected.id}
            {...props}
          >
            <option value="0"> Selecione </option>
            {options &&
              options.map(({ id, name: optionName, street, nameEn}) => {
                return (
                  <option value={nameEn ? nameEn : id} key={id}>
                    {optionName ? optionName : street}
                  </option>
                );
              })}

          </SelectField>
        </ContainerInput>

        {errors && <Error name={name} error={errors} marginRight={true} />}
      </ContainerInputError>
    </Container >
  );
});

export default memo(Select);

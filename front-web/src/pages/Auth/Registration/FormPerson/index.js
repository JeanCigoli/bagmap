import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import Select from 'components/Select';
import { useForm } from "react-hook-form";
import { ButtonSecondary } from 'components/Button';
import { HeaderContent } from '../../Login/styled';
import { Form } from '../../styled';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Description } from '../styled';
import { GENDERS } from 'config/constants';
import { personFormSchema as validationSchema } from 'utils/validation';
import { sendPerson, verifyEmail } from 'store/modules/register/action';
import { cellphoneMask, filterText, phoneMask } from 'utils/mask';
import { PATTERN_EMAIL } from 'config/constants';

const FormPerson = ({ idBefore, handleStep, firebaseAuth  }) => {

  const dispatch = useDispatch();
  const person = useSelector(state => state.register.person);

  const { handleSubmit, register, errors, setValue } = useForm({
    validationSchema
  });

  useEffect(() => {
    if(firebaseAuth.email) {

      setValue("email", firebaseAuth.email);
      setValue("namePerson", firebaseAuth.name)

    }
  }, [firebaseAuth])

  useEffect(() => {

    if(person) {
      const keys = Object.keys(person);

      keys.forEach(key => {
        setValue(key, person[key])
      })
    }

  }, [person])

  const [select, setSelect] = useState({
    gender: ''
  });

  const onSubmit = values => {

    if (firebaseAuth) {
      values.authorization = firebaseAuth.verified_email;
      values.uid = firebaseAuth.uid;
    }

    dispatch(sendPerson(values));
    handleStep(idBefore);
  };

  const handleSelect = event => {
    setSelect({
      gender: event.target.value
    });
  };

  const checkEmail = e => {

    const email = e.target.value;

    if(PATTERN_EMAIL.test(email)) {
      dispatch(verifyEmail(email));
    }

  }

  return (
    <>
      <Title>Preencha seus dados</Title>

      <Description>Preencha algumas informações pessoais para ajudar-nos a te conhecher melhor</Description>

      <Form onSubmit={handleSubmit(onSubmit)}>

        <Input
          type="text"
          name="namePerson"
          id="namePerson"
          label="Nome Completo"
          errors={errors.namePerson}
          ref={register}
          maxLength={100}
          onChange={event => {
            event.target.value = filterText(event);
          }} />

        <Input
          type="email"
          name="email"
          id="email"
          label="E-mail"
          errors={errors.email}
          onBlur={checkEmail}
          ref={register}
          maxLength={100} />

        <Input
          type="text"
          name="phonePerson"
          id="phonePerson"
          label="Telefone"
          errors={errors.phonePerson}
          ref={register}
          maxLength={13}
          onChange={event => {
            event.target.value = event.target.value.replace("-", "");

            if (event.target.value.length > 11) {
              event.target.value = cellphoneMask(event);
            } else {
              event.target.value = phoneMask(event);
            }
          }} />

        <Input
          type="date"
          name="dateBirth"
          id="dateBirth"
          margin="true"
          label="Data de nascimento"
          errors={errors.dateBirth}
          ref={register}
          autoComplete="off" />

        <Select
          name="gender"
          label="Sexo"
          type="text"
          data={select.gender}
          ref={register}
          options={GENDERS}
          errors={errors.gender}
          onChange={event => handleSelect(event)}
        />

        <HeaderContent marginTop="50px">
          <ButtonSecondary
            type="submit"
            text="Próximo" />
        </HeaderContent>

      </Form>
    </>
  );
}

export default FormPerson;

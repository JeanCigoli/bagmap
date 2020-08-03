import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import { useForm } from "react-hook-form";
import { ButtonSecondary } from 'components/Button';
import { HeaderContent } from '../../Login/styled';
import { Form } from '../../styled';
import Select from 'components/Select';
import { Title, Description, ContainerFlex } from '../styled';
import { TiArrowBack } from 'react-icons/ti';
import { useDispatch, useSelector } from "react-redux";
import { zipCodeMask } from 'utils/mask';
import { sendAddress } from 'store/modules/register/action';
import { addressFormSchema as validationSchema } from 'utils/validation';
import { fetchAddressViaCep, fetchCities, fetchStates } from 'store/modules/address/action';

const FormAddress = ({ idBefore, handleStep, setModal }) => {

  const [disableSubmit, setDisableSubmit] = useState(false);
  const [disableSelect, setDisableSelect] = useState(true);

  const dispatch = useDispatch();

  const fetching = useSelector(state => state.address.fetching);
  const viacep = useSelector(state => state.address.viacep);
  const states = useSelector(state => state.address.states);
  const cities = useSelector(state => state.address.cities);
  const address = useSelector(state => state.register.address);

  const [addressComplete, setAddressComplete] = useState({
    state: '',
    city: '',
  });

  const { handleSubmit, register, errors, setValue } = useForm({
    validationSchema
  });

  useEffect(() => {

    if (address) {
      const keys = Object.keys(address);

      keys.forEach(key => {
        setValue(key, address[key])
      })
    }

  }, [address])

  useEffect(() => {
    if (viacep) {
      const state = states.find(({ uf }) => viacep.uf === uf);
      if (state) {
        handleCities(state.id);
      }
    }

    setValue("neighborhood", viacep?.bairro);
    setValue("street", viacep?.logradouro);

    setAddressComplete({
      state: viacep?.uf,
      city: viacep?.localidade,
    });

  }, [viacep]);

  useEffect(() => {
    if (fetching) {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [fetching]);

  useEffect(() => {
    if (!states) {
      dispatch(fetchStates());
    }
  }, [])

  const onSubmit = values => {
    dispatch(sendAddress(values));
    handleStep(idBefore);
  };

  const twoCalls = event => {
    handleAddress(event.target.value);
    event.target.value = zipCodeMask(event);
  };

  const handleCity = event => {
    setAddressComplete({
      ...addressComplete,
      city: event.target.value
    });
  };

  const handleCities = async stateId => {
    stateId === "0" || !stateId
      ? setDisableSelect(true)
      : setDisableSelect(false);

    setAddressComplete({
      city: "",
      state: stateId
    });
    dispatch(fetchCities(stateId));
  };

  const handleAddress = async zipCode => {
    if (!zipCode.includes("_") && zipCode.length === 9) {
      dispatch(fetchAddressViaCep(zipCode));
    }
  };

  return (
    <>
      <Title><TiArrowBack onClick={() => handleStep(idBefore - 2)} />Agora seu endereço</Title>

      <Description>Servirá para encontrar os melhores lugares perto de você</Description>

      <Form onSubmit={handleSubmit(onSubmit)}>

        <ContainerFlex>
          <Input
            type="text"
            name="zipcode"
            id="zipcode"
            label="CEP"
            errors={errors.zipcode}
            ref={register}
            maxLength="9"
            onChange={event => twoCalls(event)} />

          <Input
            name="number"
            placeholder=""
            label="N°"
            ref={register}
            errors={errors.number}
            type="text"
            maxLength="10"
          />
        </ContainerFlex>

        <Input
          name="street"
          placeholder=""
          label="Rua"
          ref={register}
          errors={errors.street}
          type="text"
          maxLength="50"
        />

        <Input
          name="neighborhood"
          placeholder=""
          label="Bairro"
          ref={register}
          errors={errors.neighborhood}
          type="text"
          maxLength="50"
        />

        <ContainerFlex>
          <Select
            name="state"
            label="Estado"
            type="text"
            ref={register}
            data={addressComplete.state}
            errors={errors.state}
            options={states || []}
            onChange={event => handleCities(event.target.value)}
          />

          <Select
            name="city"
            label="Cidade"
            type="text"
            ref={register}
            errors={errors.city}
            data={addressComplete.city}
            disabled={disableSelect}
            options={cities || []}
            onChange={event => handleCity(event)}
          />
        </ContainerFlex>

        <Input
          name="complement"
          label="Complemento (opcional)"
          type="text"
          ref={register}
          errors={errors.complement}
          maxLength={45}
        />


        <HeaderContent marginTop="50px">
          <ButtonSecondary
            disabled={disableSubmit}
            type="submit"
            text="Próximo" />
        </HeaderContent>

      </Form>
    </>
  );
}

export default FormAddress;

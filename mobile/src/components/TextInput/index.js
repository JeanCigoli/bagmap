import React, { memo } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { styles } from './styled';
import cores from '../../styles/cores';
import { View, Text } from 'react-native';

const InputText = ({ errors, icon, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        mode={"flat"}
        underlineColor={cores.green_darker}
        theme={{
          colors: {
            primary: cores.green_darker,
            background: cores.white
          }
        }}
        error={errors ? true : false}
        style={styles.inputName}
        {...props}
      />
      <HelperText type="error" visible={!!errors}>
        {errors && (
          <>
            {
              errors.message ? errors.message : errors?.types?.message
            }
          </>
      
        ) }
      </HelperText>

      {
        icon && (icon)
      }


    </View>
  );
}

export default memo(InputText);
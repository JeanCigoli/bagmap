import React from 'react';
import cores from '../../styles/cores';
import RNPickerSelect from 'react-native-picker-select';
import { HelperText } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from './styled';

const Picker = ({ errors, items, textHint, ...props }) => {
  return (
    <View style={styles.container}>


      <View style={styles.inputName}>

        <RNPickerSelect
          items={items}
          style={{
            inputAndroid: { color: cores.green_darker },
            inputIOS: { color: cores.green_darker },
            placeholder: { color: "#707070" },

          }}
          placeholder={{ label: textHint, color: '#292929', value: '0' }}
          {...props}>

        </RNPickerSelect>
      </View>

      <HelperText type="error" visible={!!errors}>
        {errors ? errors.message : ''}
      </HelperText>

    </View>
  );
}

export default Picker;
import React from 'react';
import { styles } from './styled';
import { View, Text, Animated } from 'react-native';
import { Modal } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import map from '../../animation/map.json';

const ModalLoading = ({ visible, text }) => {
  return (
    <Modal visible={visible} style={styles.modal}>

      <View style={styles.modal}>

        <View style={styles.modalView}>

          <LottieView
            source={map}
            autoPlay
            loop={true}
            resizeMode="cover"
          />

          <Text style={styles.txtModalTitle}>
            {text}
          </Text>

        </View>

      </View>

    </Modal>
  );
}

export default ModalLoading;
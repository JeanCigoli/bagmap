import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "../styled";

const AddEstablishment = ({ navigation }) => {
  return (
    <View style={styles.containerData}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.containerScroll}>
              <View style={styles.containerLottie}>
                <View style={styles.containerTitle}>
                  <Text style={styles.title}>
                    Cadastre seu negócio e deixe visível para os nossos
                    usuários!
                  </Text>
                </View>

                <Image
                  style={styles.img}
                  source={require("../../../../assets/establishment.png")}
                />
              </View>

              <TouchableOpacity
                style={styles.buttonNew}
                onPress={() => {
                  navigation.push("RegisterEstablishment");
                }}
              >
                <Text style={styles.txtButtonNew}>
                  Crie seu estabelecimento!
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
  );
}

export default AddEstablishment;
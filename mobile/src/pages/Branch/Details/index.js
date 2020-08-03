import React, { useLayoutEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome5";
import { styles } from "./styled";
import { View, ScrollView, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map/index";
import cores from "../../../styles/cores";

const Details = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const [details, setDetails] = useState(null);

  const { id } = route.params;

  const branch = useSelector((state) => state.branch.data);

  useLayoutEffect(() => {
    const detailsBranch = branch.filter((data) => data.idBranch === id);
    setDetails(detailsBranch[0]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Icon
          style={styles.icon}
          name={"leftcircle"}
          onPress={() => navigation.goBack()}
          size={35}
          color={cores.green_darker}
        />

        {details && (
          <Map
            location={{
              latitude: details.latitude,
              longitude: details.longitude,
            }}
            name={details.nameBranch}
          />
        )}
      </View>

      <View style={styles.details}>
        <ScrollView style={styles.scrollView}>
          {details && (
            <>
              <View style={styles.containerData}>
                <Text style={styles.typePlace}>{details.typePlace.name}</Text>
                <Text style={styles.name}>{details.nameBranch}</Text>
                <Text style={styles.normal}>
                  <IconFont
                    style={styles.iconNormal}
                    name={"phone"}
                    size={20}
                  />{"   "}
                  {details.phoneBranch}
                </Text>
                <Text style={styles.normal}>
                  <IconFont
                    style={styles.iconNormal}
                    name={"money-check"}
                    size={20}
                  />{"   "}
                  {details.cnpj}
                </Text>
              </View>   
        
              <View style={styles.containerimage}>
                <Text style={styles.normal}>
                  <IconFont
                    style={styles.iconNormal}
                    name={"camera"}
                    size={20}
                  />{"   "}
                  Fotos
                </Text>
                <View style={styles.imagesDiv}>
                  {
                    details && details.images.map(image => (
                      <View key={image.idImage} style={styles.imagesData}>
                        <Image 
                          style={styles.images}
                          source={{
                            uri: image.link
                          }}
                          />
                      </View>
                    ))
                  }
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;

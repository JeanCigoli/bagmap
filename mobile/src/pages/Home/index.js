import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TouchableHighlight } from "react-native";
import { Avatar, Searchbar } from "react-native-paper";
import { styles } from "./styled";
import cores from "../../styles/cores";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import ModalLoading from "../../components/ModalLoading";
import {
  fetchEstablishment,
  clearEstablishment,
} from "../../store/modules/establishment/action";
import { logout } from "../../store/modules/auth/action";
import { fetchBranch } from "../../store/modules/branch/action";
import { getFirstAccess, getUserAutenticate } from "../../utils";
import AddEstablishment from "./AddEstablishment";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const establishment = useSelector((state) => state.establishment.data);
  const fetching = useSelector((state) => state.establishment.fetching);
  const dataFetching = useSelector((state) => state.establishment.dataFetching);
  const branch = useSelector((state) => state.branch.data);
  const fetchingBranch = useSelector((state) => state.branch.fetching);

  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    getAccess();
    getUser();

    return () => {
      dispatch(clearEstablishment());
    };
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(fetchEstablishment(parseInt(user.idUser, 10)));
    }
  }, [user]);

  useEffect(() => {
    if (establishment) {
      dispatch(fetchBranch(establishment.idEstablishment));
    }
  }, [establishment]);

  const getUser = async () => {
    const userGet = await getUserAutenticate();
    setUser(JSON.parse(userGet));
  };

  const goRegister = () => {
    navigation.push('RegisterBranch');
  }

  const goDetails = (id) => {
    navigation.navigate('BranchDetails', {
      id,
    });
  }

  const getAccess = async () => {
    const fisrtAccess = await getFirstAccess();

    if (!fisrtAccess) {
      navigation.push("Tips");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBackground}></View>

      <View style={styles.containerAvatar}>
        <Icon
          name={"stream"}
          onPress={() => dispatch(logout(navigation))}
          size={25}
          color="#fff"
        />

        <Avatar.Image
          size={60}
          source={{
            uri: user?.image,
          }}
        />
      </View>

      {establishment && (
        <>
          <Text style={styles.txtSubCompany}>Empresa</Text>
          <View style={styles.containerCompany}>
            <Text style={styles.txtCompany}>Delícia Gelada</Text>
            <TouchableOpacity onPress={goRegister} style={styles.buttonNext}>
              <Icon name={"plus"} size={28} color="#FFF" />
            </TouchableOpacity>
          </View>
        </>
      )}

      {dataFetching && <AddEstablishment navigation={navigation} />}

      {branch && (
        <View style={styles.branch}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.containerBranch}>

              {branch.map((data) => (
                <TouchableHighlight style={styles.branchData} key={data.idBranch} onPress={() => goDetails(data.idBranch)}>
                  <View style={styles.branchViewData}>
                    <Image
                      style={styles.branchImage}
                      source={{
                        uri: data.image,
                      }}
                      alt={data.nameBranch}
                    />

                    <Text style={styles.txtBranch}>{data.nameBranch}</Text>

                    <View style={styles.supBranch}></View>
                  </View>
                </TouchableHighlight>
              ))}
            </View>
          </ScrollView>
        </View>
      )}

      <ModalLoading visible={fetching} text="Buscando dados da empresa" />
      <ModalLoading visible={fetchingBranch} text="Buscando suas filiais" />
    </View>
  );
};

export default Home;

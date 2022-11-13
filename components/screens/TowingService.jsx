import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { drivers } from "../apis/DATA";
import DriverContainer from "./DriverContainer";
import Icon from 'react-native-vector-icons/AntDesign'

const TowingService = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={require("../../assets/img/towingBanner.png")}
        />
        <Text
          style={[
            styles.bannerText,
            { top: 30, fontSize: 22, lineHeight: 33, fontWeight: "600" },
          ]}
        >
          Nearby Towing {"\n"} Shops{" "}
        </Text>
        <TouchableOpacity
          onPress={()=>{}}
        >
        <Text
          style={[
            styles.bannerText,
            { bottom: 30, fontSize: 17, lineHeight: 25, fontWeight: "400" },
          ]}
        >
          Explore now{" "} <Icon name="arrowright" size={17} color="#ffffff" />
        </Text>  
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Availble now</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.filterBtn}>Filter <Icon name="down" size={13} color="#7D7FF2" /></Text>
        </TouchableOpacity>
      </View>
      <FlatList
      style={{height:460}}
        data={drivers}
        keyExtractor={(item) => item.driverId}
        renderItem={({ item }) => {
          return <DriverContainer driver={item} navigation={navigation} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TowingService;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#d6d8db",
    marginBottom:30,
  },
  banner: {
    height: 150,
    width: "100%",
    marginVertical: 15,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bannerText: {
    position: "absolute",
    color: "#ffffff",
    left: 15,
    textAlignVertical:'center'
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
  },
  filterBtn: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 22,
    color: "#5D5FEF",
    textAlignVertical:'center'
  },
});

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { vehicleTypes } from "../apis/DATA";

const Second = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.qView}>
        <Text style={styles.text}>select your vehicle type</Text>
        <View style={{height:1,width:300,backgroundColor:'#000',marginVertical:10}}/>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.vehType}>
          {vehicleTypes.map((ele) => {
            return (
              <TouchableOpacity
              key={ele.id}
              onPress={()=>{navigation.navigate('Towing Service')}}
              >
                <View style={styles.vehBox}>
                  <Image source={{ uri: ele.img }} style={styles.img} />
                  <Text style={{ fontSize: 20, textAlign: "center" }}>
                    {ele.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  qView: {
    flex: 1,
    alignItems: "center",
  },
  vehType: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 24,
  },
  vehBox: {
    height: 130,
    width: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  img: {
    height: 90,
    aspectRatio: 1,
  },
});

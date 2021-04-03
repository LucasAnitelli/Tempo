import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
    >
      <Feather name="menu" size={36} color="#373737" />
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    position: "absolute",
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    left: 10,
    top: 40,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3, 
    }, 
  },
});

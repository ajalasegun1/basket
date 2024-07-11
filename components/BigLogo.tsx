import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BigLogo = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="cart-outline"
        size={50}
        color={"#fff"}
        style={styles.logo}
      />
      <Text style={styles.text}>Basket</Text>
    </View>
  );
};

export default BigLogo;

const styles = StyleSheet.create({
  container: {
    width: 130,
    aspectRatio: 1,
    backgroundColor: "#ff7913",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 150,
  },
  logo: {
    transform: [
      {
        rotateY: "180deg",
      },
    ],
  },
  text: {
    fontWeight: "900",
    fontSize: 30,
    color: "#fff",
  },
});

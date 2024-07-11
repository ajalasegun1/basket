import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const LogoWithName = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Ionicons
          name="cart-outline"
          size={40}
          color={"#fff"}
          style={styles.logoCart}
        />
      </View>
      <Text style={styles.text}>basket</Text>
    </View>
  );
};

export default LogoWithName;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    width: 60,
    aspectRatio: 1,
    backgroundColor: "#ff7913",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  logoCart: {
    transform: [
      {
        rotateY: "180deg",
      },
    ],
  },
  text: {
    color: "#ff7913",
    fontSize: 30,
    fontWeight: "700",
  },
});

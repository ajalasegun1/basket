import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithName from "../LogoWithName";
import image from "../../assets/images/shop.jpg";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useAuthUserStore } from "@/store/authUserStore";

const SecondOnboaring = () => {
  const { width } = useWindowDimensions();
  const styles = makeStyles(width);
  const { setOnboarded, onboarded } = useAuthUserStore();
  console.log({ onboarded });

  return (
    <SafeAreaView style={styles.container}>
      <LogoWithName />
      <View style={styles.inner}>
        <View style={styles.topCluster}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.basket}>basket online store</Text>
          <Text style={styles.basketIs}>
            basket is the no1 online store for {`\n`}both new and used products
          </Text>
        </View>
        <View style={styles.bottomCluster}>
          <Image source={image} style={styles.image} />
          <Link
            href={"/login"}
            asChild
            onPress={() => {
              console.log("Onboarded");
              setOnboarded();
            }}
          >
            <Pressable style={styles.button}>
              <Text style={styles.start}>GET STARTED</Text>
              <FontAwesome6 name="arrow-right" size={24} color="#052d43" />
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondOnboaring;

const makeStyles = (width: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#052d43",
      width,
      paddingTop: 20,
    },
    inner: {
      flex: 1,
      gap: 80,
    },
    topCluster: {
      gap: 10,
      paddingTop: 40,
    },
    welcome: {
      fontSize: 24,
      color: "#fff",
      textAlign: "center",
    },
    basket: {
      fontSize: 28,
      fontWeight: "700",
      color: "#fff",
      textAlign: "center",
    },
    basketIs: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      lineHeight: 30,
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 150,
      alignSelf: "center",
    },
    button: {
      height: 44,
      width: "100%",
      borderRadius: 8,
      backgroundColor: "#ff7913",
      paddingHorizontal: 40,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    bottomCluster: {
      width: "100%",
      gap: 30,
      paddingHorizontal: 30,
    },
    start: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "700",
      width: "100%",
      textAlign: "center",
      paddingLeft: 24,
    },
  });

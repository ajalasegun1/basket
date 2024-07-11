import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Profile = () => {
  const { top } = useSafeAreaInsets();
  const styles = makeStyles(top);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.logo}>
            <Ionicons
              name="cart-outline"
              size={30}
              color={"#fff"}
              style={styles.logoCart}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="search-sharp" size={24} color="black" />
            <TextInput
              placeholder="Search in basket"
              style={styles.input}
              selectionColor={"#343434"}
            />
          </View>
          <Ionicons name="menu" size={40} color="#ff7913" />
        </View>
      </View>
      <View style={styles.background}>
        <View style={styles.profile}>
          <View style={styles.profileRow}>
            <View style={styles.imageHolder}></View>
            <View>
              <Text style={styles.name}>Daniel Obi</Text>
              <Text style={styles.email}>danielobi@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.background2}>
          <View style={styles.main}>
            <View style={styles.inner}>
              <View style={styles.innerRow}>
                <Octicons name="bell-fill" size={24} color="black" />
                <Text style={styles.list}>Notification</Text>
              </View>
              <View style={styles.innerRow}>
                <MaterialCommunityIcons
                  name="account-edit"
                  size={24}
                  color="black"
                />
                <Text style={styles.list}>Edit Profile</Text>
              </View>
              <View style={styles.innerRow}>
                <Ionicons name="star" size={24} color="black" />
                <Text style={styles.list}>Wishlist</Text>
              </View>
              <View style={styles.innerRow}>
                <FontAwesome5 name="scroll" size={20} color="black" />
                <Text style={styles.list}>Order History</Text>
              </View>
              <View style={styles.innerRow}>
                <Ionicons name="location-sharp" size={24} color="black" />
                <Text style={styles.list}>Track Order</Text>
              </View>
              <View style={styles.innerRow}>
                <FontAwesome6 name="credit-card-alt" size={20} color="black" />
                <Text style={styles.list}>Payment Option</Text>
              </View>
              <View style={styles.innerRow}>
                <Ionicons name="settings" size={24} color="black" />
                <Text style={styles.list}>Settings</Text>
              </View>
              <View style={styles.innerRow}>
                <MaterialCommunityIcons name="logout" size={24} color="black" />
                <Text style={styles.list}>Logout</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const makeStyles = (top: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      backgroundColor: "#052d43",
      paddingHorizontal: 20,
      paddingTop: 20 + top,
      paddingBottom: 10,
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      height: 44,
    },
    logo: {
      width: 40,
      aspectRatio: 1,
      backgroundColor: "#ff7913",
      borderRadius: 40,
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
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      height: 40,
      borderRadius: 8,
      padding: 8,
      gap: 10,
    },
    input: {
      flex: 1,
      height: 40,
    },
    background: {
      flex: 1,
      backgroundColor: "#fff",
    },
    profile: {
      height: 250,
      backgroundColor: "#ff7913",
      paddingHorizontal: 30,
      paddingTop: 40,
    },
    profileRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },

    imageHolder: {
      width: 80,
      aspectRatio: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 80,
    },
    background2: {
      flex: 1,
      backgroundColor: "#fff",
      borderRadius: 20,
      marginTop: -20,
    },
    main: {
      flex: 1,
      backgroundColor: "#fff",
      marginHorizontal: 15,
      marginTop: -90,
      borderRadius: 16,
    },
    name: {
      fontSize: 24,
      fontWeight: "700",
      color: "#052d43",
    },
    email: {
      fontSize: 16,
      color: "#052d43",
    },
    inner: {
      width: "60%",
      paddingTop: 60,
      flex: 1,
      alignSelf: "center",
      gap: 30,
    },
    innerRow: {
      flexDirection: "row",
      gap: 50,
      alignItems: "center",
    },
    list: {
      fontSize: 18,
      fontWeight: "700",
      color: "#052d43",
    },
  });

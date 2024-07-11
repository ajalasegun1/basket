import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { FC } from "react";
import onbord from "../../assets/images/onboard.jpg";
import BigLogo from "../BigLogo";
import Animated from "react-native-reanimated";
import { Link } from "expo-router";

type Props = {
  scrollRef: React.RefObject<Animated.ScrollView>;
};

const FirstOnboarding: FC<Props> = ({ scrollRef }) => {
  const { width } = useWindowDimensions();
  const styles = makeStyles(width);

  return (
    <ImageBackground source={onbord} style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.top}>
          <BigLogo />
          <View style={styles.textClutter}>
            <Text style={styles.bigText}>Start Shopping.</Text>
            <Text style={styles.bigText}>Stay Happy.</Text>
            <Text style={styles.bigText}>Anytime.</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.orange}>Basket Online Marketplace</Text>
          <View style={styles.bottomRow}>
            <Link asChild href={"/login"}>
              <Text style={styles.orange}>Skip</Text>
            </Link>

            <Pressable
              onPress={() => scrollRef.current?.scrollTo({ x: width })}
            >
              <Text style={styles.orange}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FirstOnboarding;

const makeStyles = (width: number) =>
  StyleSheet.create({
    container: {
      width,
      flex: 1,
    },
    inner: {
      flex: 1,
      backgroundColor: "#052d4361",
    },
    top: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    bigText: {
      fontSize: 24,
      color: "#fff",
      textAlign: "center",
    },
    textClutter: {
      gap: 20,
      marginTop: 20,
    },
    bottom: {
      //   backgroundColor: "black",
      paddingBottom: 40,
    },
    orange: {
      fontSize: 20,
      fontWeight: "700",
      color: "#ff7913",
      textAlign: "center",
    },
    bottomRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      marginTop: 20,
    },
  });

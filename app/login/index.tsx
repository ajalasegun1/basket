import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoWithName from "@/components/LogoWithName";
import Spacer from "@/components/Spacer";
import { FontAwesome6 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const [secure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);
  function goToProfile() {
    router.push("(tabs)/profile");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} keyboardShouldPersistTaps="always">
        <LogoWithName />
        <Spacer gap={40} />
        <View style={styles.topCluster}>
          <Text style={styles.title}>Login to your account</Text>
          <Text style={styles.sub}>
            Enter your email and password{`\n`}
            to access your account or create{`\n`}your account
          </Text>
        </View>
        <Spacer gap={40} />
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <FontAwesome6 name="envelope" size={24} color="#ff7913" />
            <TextInput
              placeholder="Email"
              style={styles.input}
              selectionColor={"#242424"}
            />
          </View>
          <View style={styles.inputContainer}>
            <Foundation
              name="key"
              size={24}
              color="#ff7913"
              style={styles.key}
            />
            <TextInput
              secureTextEntry={secure}
              placeholder="Password"
              style={styles.input}
              selectionColor={"#242424"}
            />
            {secure ? (
              <Pressable onPress={() => setSecure(!secure)}>
                <Feather name="eye" size={24} color="#ff7913" />
              </Pressable>
            ) : (
              <Pressable onPress={() => setSecure(!secure)}>
                <Feather name="eye-off" size={24} color="#ff7913" />
              </Pressable>
            )}
          </View>
          <Spacer gap={1} />

          <View style={styles.rememberRow}>
            <Pressable onPress={() => setRemember(!remember)}>
              <View style={styles.outerBox}>
                {remember && <View style={styles.innerBox} />}
              </View>
            </Pressable>
            <Text style={styles.remember}>Remember me</Text>
          </View>
        </View>
        <Spacer gap={40} />
        <Pressable style={styles.button} onPress={goToProfile}>
          <Text style={styles.login}>Login</Text>
        </Pressable>
        <Spacer gap={30} />
        <Text style={styles.forgot}> Forgot Password </Text>
        <Spacer gap={15} />
        <View style={styles.continueRow}>
          <View style={styles.dash} />
          <Text style={styles.continue}>Or continue with</Text>
          <View style={styles.dash} />
        </View>
        <Spacer gap={20} />
        <View style={styles.socialsRow}>
          <Pressable style={styles.socialItem}>
            <Image source={facebook} style={{ width: 25, aspectRatio: 1 }} />
            <Text style={styles.socialText}>Facebook</Text>
          </Pressable>
          <Pressable style={styles.socialItem}>
            <Image source={google} style={{ width: 20, aspectRatio: 1 }} />
            <Text style={styles.socialText}>Google</Text>
          </Pressable>
        </View>
        <Spacer gap={20} />
        <View style={styles.signupRow}>
          <Text style={styles.dont}>Don't have an account?</Text>
          <Text style={styles.signup}>Sign up</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  topCluster: {
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  sub: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
  },
  inputSection: {
    gap: 10,
  },
  inputContainer: {
    borderBottomColor: "#ff7913",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    gap: 20,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: "#242424",
    fontWeight: "600",
  },
  key: {
    transform: [
      {
        rotate: "-40deg",
      },
    ],
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  outerBox: {
    width: 20,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#444444",
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    width: 15,
    aspectRatio: 1,
    backgroundColor: "#ff7913",
  },
  remember: {
    color: "#444444",
    fontSize: 16,
  },
  button: {
    width: 300,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#052d43",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  login: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textTransform: "uppercase",
  },
  forgot: {
    color: "#ff7913",
    fontSize: 16,
    textDecorationColor: "#ff7913",
    textDecorationLine: "underline",
    textAlign: "center",
    fontWeight: "600",
  },
  continueRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  continue: {
    fontSize: 16,
    color: "#444444",
  },
  dash: {
    borderBottomColor: "#44444499",
    borderBottomWidth: 2,
    width: 10,
  },
  socialsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  socialItem: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: "#242424",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  socialText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#242424",
  },
  signupRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dont: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444444",
  },
  signup: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff7913",
  },
});

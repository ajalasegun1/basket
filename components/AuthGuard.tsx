import { StyleSheet, Text, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { useAuthUserStore } from "@/store/authUserStore";
import { Redirect } from "expo-router";

type Props = {
  children: ReactNode;
};
const AuthGuard: FC<Props> = ({ children }) => {
  const { user } = useAuthUserStore();
  if (!user) {
    return <Redirect href={"/login"} />;
  }
  return children;
};

export default AuthGuard;

const styles = StyleSheet.create({});

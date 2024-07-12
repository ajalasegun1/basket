import { StyleSheet, Text, View } from "react-native";
import React, { FC, ReactNode, useEffect } from "react";
import { router, useSegments } from "expo-router";
import { useAuthUserStore, UserAuthType } from "../store/authUserStore";

type Props = {
  children: ReactNode;
};
function useProtectedRoute(user: UserAuthType | undefined) {
  const segments = useSegments();
  const { onboarded } = useAuthUserStore();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && inAuthGroup) {
      onboarded
        ? router.replace("(public)/login")
        : router.replace("(public)/onboarding");
    } else if (user && !inAuthGroup) {
      router.replace("/(auth)/(tabs)/profile");
    }
  }, [user, segments]);
}
const AuthProvider: FC<Props> = ({ children }) => {
  const { user } = useAuthUserStore();
  useProtectedRoute(user);
  return <>{children}</>;
};

export default AuthProvider;

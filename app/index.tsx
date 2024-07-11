import { ScrollView, StyleSheet } from "react-native";
import React, { useRef } from "react";
import FirstOnboarding from "@/components/screen/FirstOnboarding";
import SecondOnboaring from "@/components/screen/SecondOnboaring";
import { StatusBar } from "expo-status-bar";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

const Onboarding = () => {
  const scrollHandler = useAnimatedScrollHandler((_) => {});
  const scrollRef = useRef<Animated.ScrollView>(null);
  return (
    <Animated.ScrollView
      horizontal
      style={styles.container}
      pagingEnabled
      onScroll={scrollHandler}
      ref={scrollRef}
    >
      <StatusBar style="light" />
      <FirstOnboarding scrollRef={scrollRef} />
      <SecondOnboaring />
    </Animated.ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

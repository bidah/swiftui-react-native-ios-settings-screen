/**
 * This is a demo app that displays all of the components offered by the library.
 * To present them nicely, each section is wrapped in a List view, but they are not
 * required to be.
 */

import React from "react";
import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import {
  EnvironmentProvider,
  Text,
  useEnvironment,
  useUIColor,
} from "swiftui-react-native";
import { ButtonSection } from "./src/sections/ButtonSection";
import { ColorSection } from "./src/sections/ColorSection";
import { ControlSection } from "./src/sections/ControlSection";
import { FontSection } from "./src/sections/FontSection";
import { ImageSection } from "./src/sections/ImageSection";
import { StackSection } from "./src/sections/StackSection";
import { TextFieldSection } from "./src/sections/TextFieldSection";
import { ProgressSection } from "./src/sections/ProgressSection";

// Wrap the app in a EnvironmentProvider to enable light/dark mode by default
export default function App() {
  return (
    <EnvironmentProvider colorScheme="dark">
      <Examples />
    </EnvironmentProvider>
  );
}

const Examples = () => {
  const { colorScheme } = useEnvironment();
  const UIColor = useUIColor();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: UIColor.secondarySystemBackground },
      ]}
    >
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text padding={20} alignment="leading" font="title" bold>
          SwiftUI React Native - iOS Settings Screen
        </Text>
        {/* Uncomment below to explore more of the SwiftUI React Native primitives */}
        {/* <FontSection />
        <ButtonSection />
        <ControlSection />
        <TextFieldSection />
        <ProgressSection />
        <ImageSection /> */}
        {/* <StackSection /> */}
        <ColorSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "flex-start",
  },
  contentContainerStyle: { paddingBottom: 50 },
});

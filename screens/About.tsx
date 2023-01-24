import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { RootStackParamList } from "../types";

type AboutProps = NativeStackScreenProps<RootStackParamList, "About">;
const About = ({ navigation }: AboutProps) => {
  const handleNavigation = () => {
    navigation.navigate("Details");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> About </Text>
      <Button title="Review details screen" onPress={handleNavigation} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { RootStackParamList } from "../types";

type ReviewDetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;
const ReviewDetails = ({ navigation }: ReviewDetailsProps) => {
  const handleNavigation = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={globalStyles.paragraph}> Review</Text>
      <Button title="Home" onPress={handleNavigation} />
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

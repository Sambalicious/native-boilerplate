import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { DetailScreenRouteProp, HomeStackParamList } from "../types";

type ReviewDetailsProps = NativeStackScreenProps<HomeStackParamList, "Details">;
const ReviewDetails = ({ navigation }: ReviewDetailsProps) => {
  const route = useRoute<DetailScreenRouteProp>();

  const { title, body, id, rating } = route.params;
  const handleNavigation = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={globalStyles.paragraph}>Title: {title} </Text>
      <Text style={globalStyles.paragraph}>description: {body}</Text>
      <Text style={globalStyles.paragraph}>ID: #{id}</Text>
      <Text style={globalStyles.paragraph}>Rating: {rating} </Text>

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

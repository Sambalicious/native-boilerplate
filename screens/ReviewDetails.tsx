import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
const ReviewDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.paragraph}> Review</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

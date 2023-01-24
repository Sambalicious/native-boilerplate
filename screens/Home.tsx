import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>I am here now. Hello world!</Text>
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//   },
//   titleText: {
//     fontFamily: "Montserrat-Semibold",
//     fontSize: 18,
//   },
// });

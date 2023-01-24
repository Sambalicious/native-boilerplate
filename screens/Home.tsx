import { Button, Text, View } from "react-native";
import * as NavigationService from "react-navigation-helpers";
import { globalStyles } from "../styles/global";
const Home = () => {
  const handleOnPress = () => {
    NavigationService.push("About");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Hello world!</Text>
      <Button title="Go to about" onPress={handleOnPress} />
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

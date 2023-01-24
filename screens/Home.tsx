import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { RootStackParamList } from "../types";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
const Home = ({ navigation, route }: HomeProps) => {
  const handleOnPress = () => {
    navigation.navigate("About");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Hello world!</Text>
      <Button title="Go to About screen" onPress={handleOnPress} />
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

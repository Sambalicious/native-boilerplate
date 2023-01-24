import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { review } from "../shared/dummy";
import { globalStyles } from "../styles/global";
import { RootStackParamList, TReview } from "../types";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
const Home = ({ route }: HomeProps) => {
  const navigation = useNavigation();
  const [allReviews, setAllReviews] = useState(review);
  const handleOnPress = (item: TReview) => {
    navigation.navigate("Details", { item });
  };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={allReviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOnPress(item)}>
            <Text style={styles.item}>{item.title} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: { marginVertical: 6 },
});

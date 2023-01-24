import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
  Home: {
    screen: Home,
  },
  Details: {
    screen: ReviewDetails,
  },
};
const HomeStack = createStackNavigator(screens);
export default NavigationContainer(HomeStack);

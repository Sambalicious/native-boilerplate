import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./homeStackNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

import { StyleSheet } from "react-native";
import fonts from "../shared/fonts";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.montserrat.semibold,
    fontSize: 18,
    color: "#333",
  },

  container: {
    flex: 1,
    padding: 20,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});

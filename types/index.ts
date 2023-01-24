import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackParamList = {
  Home: undefined;
  Details: TReview;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "Details"
>;
export type DetailScreenRouteProp = RouteProp<HomeStackParamList, "Details">;

export interface TReview {
  title: string;
  id: number;
  body: string;
  rating: number;
}

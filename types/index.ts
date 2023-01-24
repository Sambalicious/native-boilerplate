export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Details: TReview;
};

export interface TReview {
  title: string;
  id: number;
  body: string;
  rating: number;
}

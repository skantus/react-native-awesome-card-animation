declare module '*';

type NavigationProps = {
  navigation: NavigationStackProp;
  screenProps: NavigationStackScreenProps;
};

interface Card {
  id: number | string;
  title: string;
  imageUri: string;
  description: string;
  items?: CardItem[];
}

interface CardItem {
  name: string;
  url: string;
}

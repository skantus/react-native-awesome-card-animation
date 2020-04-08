declare module '*';

type NavigationProps = {
  navigation: NavigationStackProp;
  screenProps: NavigationStackScreenProps;
};

interface Card {
  id: number | string;
  title: string;
  imageUri: ImageURISource;
  description: string;
  items?: CardItem[];
}

interface CardItem {
  title: string;
  thumbnailUrl: string;
}

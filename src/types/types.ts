export interface AppHeaderProps {
  title?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Item {
  id: number;
  title: string;
}

export interface SearchItem {
  id: number;
  title: string;
  category: string;
  desc: string;
}

export interface PlaceholderItem {
  id: number;
  title: string;
  body: string;
}

export type HomeStackParamList = {
  Home: undefined;
};

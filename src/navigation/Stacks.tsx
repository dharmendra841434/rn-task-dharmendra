import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { createStack } from './createStack';

export const HomeStack = createStack([{ name: 'Home', component: HomeScreen }]);

export const SearchStack = createStack([
  { name: 'Search', component: SearchScreen },
]);

export const ProfileStack = createStack([
  { name: 'Profile', component: ProfileScreen },
]);

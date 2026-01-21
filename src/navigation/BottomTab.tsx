import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Home, Search, User } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2c3e50',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size, focused }) => {
          switch (route.name) {
            case 'HomeTab':
              return (
                <Home
                  color={color}
                  size={size}
                  strokeWidth={focused ? 2.5 : 2}
                />
              );

            case 'Search':
              return (
                <Search
                  color={color}
                  size={size}
                  strokeWidth={focused ? 2.5 : 2}
                />
              );

            case 'Profile':
              return (
                <User
                  color={color}
                  size={size}
                  strokeWidth={focused ? 2.5 : 2}
                />
              );

            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type ScreenConfig = {
  name: string;
  component: React.ComponentType<any>;
};

const Stack = createNativeStackNavigator();

export const createStack = (screens: ScreenConfig[]) => {
  return () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {screens.map(({ name, component }) => (
        <Stack.Screen
          key={name}
          name={name as never}
          component={component as never}
        />
      ))}
    </Stack.Navigator>
  );
};

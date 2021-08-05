import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import DrawerNavigator from "./Navigation/DrawerNavigator";
import { createStackNavigator } from '@react-navigation/stack';

import DailyPicScreen from './Screens/DailyPicScreen';
import HomeScreen from './Screens/HomeScreen';
import SpaceCraftsScreen from './Screens/SpaceCraftsScreen';
import StarMapScreen from './Screens/StarMapScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SpaceCraftsScreen" component={SpaceCraftsScreen} />
        <Stack.Screen name="StarMapScreen" component={StarMapScreen} />
        <Stack.Screen name="DailyPicScreen" component={DailyPicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
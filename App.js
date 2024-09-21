import React from 'react';


import FirstScreen from './screens/FirstScreen';
import Cau1a from './screens/Cau1a';
import Cau1b from './screens/Cau1b';
import Cau1c from './screens/Cau1c';
import Cau1d from './screens/Cau1d';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    // <FirstScreen />
    // <Cau1a />
    // <Cau1b />
    // <Cau1c />
    // <Cau1d />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cau1d">
        <Stack.Screen name="Cau1a" component={Cau1a} options={{ headerShown: false }} />
        <Stack.Screen name="Cau1d" component={Cau1d} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

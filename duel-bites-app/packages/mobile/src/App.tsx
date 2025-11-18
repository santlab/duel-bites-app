import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterSelect from './components/CharacterSelect';
import Battle from './components/Battle';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharacterSelect">
        <Stack.Screen name="CharacterSelect" component={CharacterSelect} />
        <Stack.Screen name="Battle" component={Battle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
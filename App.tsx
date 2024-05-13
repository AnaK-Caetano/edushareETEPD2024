import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';

const Stack = createNativeStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <StatusBar style="auto"></StatusBar>
        <Stack.Navigator initialRouteName="AuthStack">
          <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
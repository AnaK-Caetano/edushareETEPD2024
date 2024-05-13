import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Cadastro" component={SignupScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
    container: {}
});
import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const handleSignup = () => {
        navigation.navigate('LoginScreen');
      };

    return(
      <View>
        <Text>Signup Screen</Text>
        <Button title="Signup" onPress={handleSignup} />
      </View>
    );
};

export default RegisterScreen; 
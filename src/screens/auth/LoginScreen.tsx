import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('HomeScreen');
      };

    return(
        <View>
            <Text>Login Screen</Text>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}


export default LoginScreen; 
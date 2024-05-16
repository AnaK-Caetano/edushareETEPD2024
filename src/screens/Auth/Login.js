import React from 'react';
import { View, Text, Button } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Login;

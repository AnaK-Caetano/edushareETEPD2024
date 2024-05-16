import React from 'react';
import { View, Text, Button } from 'react-native';

function Register({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastre-se</Text>
      <Button
        title="Finalizar"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default Register;


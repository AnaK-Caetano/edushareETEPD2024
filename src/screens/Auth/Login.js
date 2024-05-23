import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../../components/Button/CustomButton';
import Input from '../../components/Input/Input';

const Login = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edushare</Text>
      <Text style={styles.text}>Seja Bem-Vindo (a)</Text>
      <Input placeholder="Login"></Input>
      <Input placeholder="Senha"></Input>

      <CustomButton
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={styles.buttonLogin}
      />
       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ marginTop: 10, fontFamily: 'Poppins-Light'} }>Não tem cadastro? <Text style={{ fontWeight: 'bold', color: '#535272'}}>Cadastre-se</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  title: {
    fontSize: 48,
    fontFamily: 'Poppins-Black',
    color: "#535272",
    marginBottom: 72, 
  }, 
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: "#535272",
    marginBottom: 20, 
  }, 
  buttonLogin: {
    width: 100, 
    height: 46,
    fontSize: 20,
    marginTop: 20, 
  },
  buttonRegister: {
    marginTop: 10, 
  }
});

export default Login;
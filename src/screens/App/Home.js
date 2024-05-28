import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Card></Card>
    </View>
  );
}

export default Home;

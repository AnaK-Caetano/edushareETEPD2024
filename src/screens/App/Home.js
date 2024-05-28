import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card/Card';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <ScrollView>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      </ScrollView>
    </View>
  );
}

export default Home;

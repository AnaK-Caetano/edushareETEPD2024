import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card/Card';

const Projects = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Projects</Text>
      <Card></Card>
    </View>
  );
}

export default Projects;

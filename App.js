import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Chart from './src/Chart'
import Selector from './src/Selector';
export default function App() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={
        <Text
          style={{color:'white'}}>
          Crypto Billy
        </Text>
      } />
      <Selector />
      <Chart/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

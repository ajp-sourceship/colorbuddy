import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Chart from './src/Chart'
import TitleBlock from './src/Selector';
export default function App() {

  const [colors, setColors] = useState([])
  const [colorsFiltered, setColorsFiltered] = useState([])
  const [selectedColor, setSelectedColor] = useState('')
  const [filterString, setFilterString] = useState('')
  

  useEffect(() => {
    getColors()
  }, [])

  const getColors = () => {
    return fetch('https://hhapi.indydev.io/api/getcolors', {
      method: "POST",
    })
      .then(response => response.json())
      .then(response => {
        setColors(response) 
        setColorsFiltered(response) 
        console.log(response)
      })
      .catch(error => {
        console.log(`woops: ` + error)
      });
  }

  const selectColor=(color)=> {
    setSelectedColor(color.ColorName)
  }

  return (
    <View style={styles.container}>
      <Header
        centerComponent={
        <Text
          style={{color:'white'}}>
          Color Buddy
        </Text>
      } />
      <TitleBlock
        selectedColor={selectedColor} />
      <Chart  
        colors={colors}
        selectColor={(color) => selectColor(color)}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

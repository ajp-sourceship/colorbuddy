import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Color {
  HexString: string, 
  ColorName: string,
  
}
interface Props {
  colors: [Color],
  selectColor: (color: Color) => void
}

const Chart: React.FC<Props> = (props) => {
  return( //flatlist is better practice technically
   <ScrollView style={styles.container}>
      {props.colors.map((color, index) => {
        return <TouchableOpacity ID={index}
          onPress={() => props.selectColor(color) }
           style={{ backgroundColor: 'white', height: 80, margin:10, borderRadius:6, padding:2 }}>
          < View style={{ height: '80%', backgroundColor: color.HexString, borderColor: 'white', borderRadius:6,  }}>
          </View>
          <Text>{color.ColorName}</Text>
        </TouchableOpacity>
      })}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});

export default Chart
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';

export default Selector = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.bStyle} >
                <Text>
                    BTC
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{...styles.bStyle, borderColor:'blue'}} >
                <Text>
                    ETH
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{...styles.bStyle, borderColor:'green'}} >
                <Text>
                    DOGE
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    bStyle:{
        margin: 10, borderWidth: 2, borderColor: 'red', borderRadius: 4, paddingVertical: 6, paddingHorizontal: 6
    }
});

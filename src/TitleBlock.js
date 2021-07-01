import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import { iOSUIKit } from 'react-native-typography';

export default TitleBlock = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{...iOSUIKit.largeTitleEmphasized, margin:2}}>
                Color: 
            </Text>
            <Text style={{...iOSUIKit.largeTitleEmphasized, margin:2}}>
                {props.selectedColor}
            </Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        alignItems:'flex-end',
        padding:10
    },
});

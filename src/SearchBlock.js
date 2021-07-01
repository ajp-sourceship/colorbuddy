import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import { iOSUIKit } from 'react-native-typography';

export default SearchBlock = (props) => {
    return (
        <SearchBar
            placeholder="Search Here"
            onChangeText={(text) => props.setFilterString(text)}
            value={props.fString}
            containerStyle={{backgroundColor: "transparent",
                  borderTopWidth: 0,
                  borderBottomWidth: 0}}
      />
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

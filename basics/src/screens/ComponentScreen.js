import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    return <Text style={Styles.textStyle}>This is the components Screen</Text>
}

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        
    }
});

export default ComponentScreen;
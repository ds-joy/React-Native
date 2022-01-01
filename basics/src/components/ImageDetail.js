import React from "react";
import {Text, View, StyleSheet} from "react-native";

const ImageDetail = () => {
    return <View>
        <Text style={styles.text}>Show image of a forest</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign:'center',
        marginTop:30,
      },
});

export default ImageDetail;
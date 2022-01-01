import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ImageDetail = (props) => {
    return <View>
        <Image style={styles.image} source={props.imageSource} />
        <Text style={styles.text}>{props.imageName}</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign:'center',
        marginTop:30,
      },
    image: {
        width: 100,
        height: 150,
        justifyContent:"center",
    }
});

export default ImageDetail;
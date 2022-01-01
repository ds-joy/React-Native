import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail 
            imageName = "forest" 
            imageSource={require("../../assets/forest.jpg")}
        />
        <ImageDetail 
            imageName= "beach" 
            imageSource={require("../../assets/beach.jpg")}
        />
        <ImageDetail 
            imageName= "house" 
            imageSource={require("../../assets/house.jpg")}
        />
        
    </View>
)}

const styles = StyleSheet.create({});

export default ImageScreen;
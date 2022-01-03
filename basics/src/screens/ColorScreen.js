import React from "react";
import {View, Button, StyleSheet} from "react-native";


const ColorScreen = () => {
    return(
        <View>
            <Button title="Add Color"></Button>
            <View 
                style= {
                    {
                        height: 100,
                        width: 100,
                        backgroundColor: 'rgb(128,110,80)'
                }}/>

            <View 
                style= {
                    {
                        height: 100,
                        width: 100,
                        backgroundColor: 'rgb(50,90,125)'
                }}/>

        </View>    
    );
}

const styles = StyleSheet.create({});

export default ColorScreen;
import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";


const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button 
                title="Increase"
                onPress={ ()=> {
                    setCounter(counter + 1);
                }}>
            </Button>
            <Text style={styles.text}></Text>

            <Button
                title="Decrease"
                onPress={() => {
                    setCounter(counter - 1);
                }}>

            </Button>


            <Text style={styles.text}>Count : {counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        marginTop:30,
        textAlign:"center",
        fontSize:30
    }
});

export default CounterScreen;
import React from "react";
import {Text, View, FlatList, StyleSheet} from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'Friend 1'},
        {name: 'Friend 2'},
        {name: 'Friend 3'},
        {name: 'Friend 4'},
        {name: 'Friend 5'},
        {name: 'Friend 6'},
        {name: 'Friend 7'},
        {name: 'Friend 8'},
        {name: 'Friend 9'},
        {name: 'Friend 10'},
        {name: 'Friend 11'},
        {name: 'Friend 12'}
    ]
    return (
        <FlatList 
            data={friends}
            renderItem={ ({item}) =>{
               return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle : {
        marginBottom: 40,
        fontSize: 30,
        textAlign: "center",
        backgroundColor: "gray"
    }
})

export default ListScreen;

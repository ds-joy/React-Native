import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// we can use props
// or we can destructure props loke
// ({navigation})
const HomeScreen = ({navigation}) => {
  return <View>
      <Button 
        title='ComponentScreen'
        onPress={()=> navigation.navigate('Components')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
         <Text style={styles.text}>List Screen</Text>
      </TouchableOpacity>
    </View>
};
    

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign:'center',
    marginTop:30,
  },
});

export default HomeScreen;
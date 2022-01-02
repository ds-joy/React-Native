import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// we can use props
// or we can destructure props loke
// ({navigation})
const HomeScreen = ({navigation}) => {
  return <View>

      <Button 
        title='Component Screen'
        onPress={()=> navigation.navigate('Components')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
         <Text style={styles.text}>List Screen</Text>
      </TouchableOpacity>

      <Button 
        title='Image Screen'
        onPress={()=> navigation.navigate('Image')}
      />

      <Button 
        title='Counter Screen'
        onPress={()=> navigation.navigate('Counter')}
      />

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
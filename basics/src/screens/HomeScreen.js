import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return <View>
      <Button 
        title='ComponentScreen'
        onPress={()=> console.log('Button pressed')}
      />
       <Button 
        title='Component'
        onPress={()=> console.log('Button pressed 2')}
      />
    </View>
};
    

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
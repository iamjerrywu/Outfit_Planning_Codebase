import React, { Component } from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
const Create=({navigation})=>{
  return(
    <View style={styles.container}>
        <Text>Create</Text>
        <Button title='Click here' onPress={() =>alert('Button clicked!')}/>
      </View>
    );
};
export default Create;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EC'
  },
  
  
});
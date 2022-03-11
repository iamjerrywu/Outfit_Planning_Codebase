import React, { Component } from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
const Calendar=({navigation})=>{
  return(
    <View style={styles.container}>
        <Text>Calendar</Text>
        <Button title='Click here' onPress={() =>alert('Button clicked!')}/>
      </View>
    );
};
export default Calendar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EC'
  },
  
  
});
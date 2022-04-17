import React, { Component } from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
import { useNavigation } from '@react-navigation/core';
const Profile=({navigation})=>{
  
return(
    <View style={styles.container}>
        <Text>Profile</Text>
        <Button title='Click here' onPress={alert("hi")}/>
      </View>
    );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EC'
  },
  
  
});
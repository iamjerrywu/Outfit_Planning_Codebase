import React, { Component,useEffect,useState, useCallback } from 'react';
import {Camera} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import {firebase,auth,db} from '../firebase/config.js';
import { StackActions, NavigationActions } from 'react-navigation';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  View,
  Text,
  Platform, Button,
  StyleSheet,Image,
  Alert,ScrollView,
  ActivityIndicator,TouchableOpacity
} from 'react-native';
const Profile=({navigation})=>{

      
return(
    <View style={styles.container}>
        <Text>Profile</Text>
        <Button title='Click here' onPress={console.log("hi")}/>
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
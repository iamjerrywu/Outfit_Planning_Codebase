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
    const[image,setImage]=useState('');
    const[name,setName]=useState("");
    db.collection("Userdata").doc(auth.currentUser.uid).get('user_prof').then((doc) => {  //Note the return here
      if (doc.exists) {
              setImage(doc.data().user_prof);
              setName(doc.data().name);  //Note the return here
          } else {
              console.log("No such document!");
              //Handle this situation the way you want! E.g. return false or throw an error
              return false;
          }
      }).catch(error => {
          console.log("Error getting document:", error);
          //Handle this situation the way you want
      });
return(
    <View style={styles.container}>
        <View style={{}}><Text style={{
    position:'relative',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'left',
    fontSize: 25,
    lineHeight: 58,
    color: '#5C514D',
    marginTop: '30%',
    marginRight:'3%',
    marginLeft: '5%',
  }}>Hi {name} </Text>
        <Image source={{uri:image}} style={{width:'40%',height:'35%',borderRadius:90,marginLeft:'60%',marginTop:'-22%'}}/>
        </View>
        <Button title='Click here' onPress={console.log("hi")}/>
      </View>
    );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'1%',
    marginHorizontal:'6%',
    backgroundColor: '#F3F0EC'
  },
  
  
});
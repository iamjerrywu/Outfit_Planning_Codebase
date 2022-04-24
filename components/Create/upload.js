import React, { Component,useEffect,useState, useRef } from 'react';
import {Camera} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import {firebase,auth} from '../firebase/config.js';
import {
  View,
  Text,
  Platform, Button,
  StyleSheet,Image,
  Alert,ScrollView,
  ActivityIndicator,
} from 'react-native';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Upload=({navigation})=>{
    const uploadImage = async () => {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            resolve(xhr.response);
          };
          xhr.onerror = function() {
            reject(new TypeError('Network request failed'));
          };
          xhr.responseType = 'blob';
          xhr.open('GET', image, true);
          xhr.send(null);
        });
    
        const ref=firebase.storage().ref().child(new Date().toISOString());
        const snapshot=ref.put(blob);
    
        snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{
          setUploading(true)
        },
        (error) => {
          setUploading(false)
          console.log(error)
          blob.close()
          return
        },
        ()=>{
          snapshot.snapshot.ref.getDownloadURL().then((url)=>{
            setUploading(false)
            console.log("download url: ",url)
            const currentUser=auth.currentUser;
            firebase.firestore().collection('Pictures')
        .add({
          userId: currentUser.uid,
          postImg: url,
          postTime: firebase.firestore.Timestamp.fromDate(new Date()),
          category: 'Pant',
          style: 'xyz'
        })
            blob.close()
            return url;
          });
        })
      }
return(
  <View style={stylem.container}>
    
    
    <View style={stylem.camcontainer}>
      <ScrollView>
          {image && <Image source={{uri:uploadImage()}} style={{width:300, height:300, marginLeft:'3%'}}/>}
      {!uploading?<Button title='Upload Photo' onPress={()=> uploadImage()}/>: <ActivityIndicator size="large" color="#000"/>}
      
      </ScrollView>
      </View>

      
  </View>
  );
};
export default Upload;
const stylem = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f3f0ec',
  position: 'relative',
    width: '100%',
    height: '60%',
},
camcontainer: {
  flex: 1,
  backgroundColor:'#fcf9f6',
  alignContent:'center',
  justifyContent:'center',
  marginTop:'15%'
},
fxr: {
  flex: 1,
  aspectRatio:1,
  marginTop: '20%',
  marginRight: '10%'
},
  title: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'center',
    fontSize: 20,
    lineHeight: 58,
    color: '#5C514D',
    marginTop:'5%',
    marginRight:'3%',
    marginLeft: '30%',
},
cameraContainer: {
  flex: 1,
  flexDirection: 'row'
},
fixedRatio:{
  flex: 1,
  aspectRatio: 1
}
});
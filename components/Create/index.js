import React, { Component,useEffect,useState, useRef } from 'react';
import {Camera} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import {firebase,auth} from '../firebase/config.js';
import {
  View,
  Text,
  Platform, Button,
  StyleSheet,Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Create=({navigation})=>{
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);

  useEffect(()=>{
    (async() => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  },[]);

  
  const takePicture = async () => {
    if(camera){
      const result= await camera.takePictureAsync(null);
      setImage(result.uri);
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if(hasCameraPermission === false || hasGalleryPermission === false){
    return <Text>No access</Text>
  }
  if(hasCameraPermission === null || hasGalleryPermission === false){
    return <View />
  }
  const uploadImage = async (url) => {
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
        blob.close()
        return url;
      });
    })
  }
  /*submit is still not working. This function puts together the user id with photos*/
  const submit = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    const currentUser=auth.currentUser;
    firebase.firestore().collection('Pictures')
    .add({
      userId: currentUser.uid,
      postImg: imageUrl,
      postTime: firebase.firestore.Timestamp.fromDate(new Date()),
      type: 'Pant'
    })
    .then(() => {
      console.log('Picture Added!');
      Alert.alert(
        'Picture published!',
        'Your post has been published successfully!',
      );
      setPost(null);
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
  }
  return(
    <View style={stylem.container}>
      
      <View style={stylem.camcontainer}>
      
        <Button title='Take Picture' onPress={() => takePicture()}/>
        <Button title='Choose Photo' onPress={() => pickImage()}/>
        {image && <Image source={{uri:image}} style={{width:300, height:300, marginLeft:'3%'}}/>}
        {!uploading?<Button title='Upload Photo' onPress={()=> submit()}/>: <ActivityIndicator size="large" color="#000"/>}
        </View>
        
    </View>
    );
};
export default Create;
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
    justifyContent:'center'
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
  }
  
});
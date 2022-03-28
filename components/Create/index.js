import React, { Component,useEffect,useState } from 'react';
import {View, Text,StyleSheet,Button, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';

const Create=({navigation})=>{
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(()=>{
    (async() => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  },[]);

  const takePicture = async () => {
    if(camera){
      const data= await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  }

  if(hasCameraPermission === false){
    return <Text>No Camera access</Text>
  }
  return(
    <View style={{flex:1}}>
      <View style={stylem.camcontainer}>
        <Text style={stylem.title}>Create</Text>
        <Camera ref={ref => setCamera(ref)} style={stylem.fxr} type={type} ratio={'1:1'} />
      </View>
      <View >
      <Button title='Flip camera' onPress={()=>{
        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front: Camera.Constants.Type.back)}}></Button>
        <Button title='Take Picture' onPress={()=> takePicture()}/>
        </View>
        {image && <Image source={{uri: image}} style={{flex:1}}/>}
    </View>
    );
};
export default Create;
const stylem = StyleSheet.create({
  camcontainer: {
    flex: 1,
    backgroundColor:'#fcf9f6'
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
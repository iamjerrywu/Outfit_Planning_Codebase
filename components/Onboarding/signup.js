import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState,useEffect,useRef,useCallback } from 'react';
import {Camera} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,Image } from 'react-native';
import Styledbutton from '../StyledButton/index.js';
import {firebase,auth,db} from '../firebase/config.js';
import DropDownPicker from 'react-native-dropdown-picker';

import Error from './Error.js';

export default function Signup({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const[gender, setGender]=useState([{label:'Male',value:'Male'},
    {label:'Female',value:'Female'},
    {label:'Others',value:'Others'},
    {label:'Prefer Not to Say',value:'Prefer Not to Say'}
  ]);
  const [prefStyle, setprefStyle] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [signupError, setSignupError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
          const user = userCredentials.user;
          navigation.navigate('Login');
        });
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };
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
      const result= await ImagePicker.launchCameraAsync();
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
  const uploadData = async () => {
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
        db.collection('Userdata').doc(currentUser.uid)
    .set({
      email: email,
      user_prof:url,
      postTime: firebase.firestore.Timestamp.fromDate(new Date()),
      name: name,
      gender: gender,
      weight: weight,
      height:height,
      waist:waist
    })
        blob.close()
        return url;
      });
    })
  }
  const onPress = () => {
    onHandleSignup();uploadData();
  };
  return (
    <View style={styles.clothContainer}>
      <ScrollView style={{width:'100%'}}>
      <Text style={{marginTop: '25%',
    marginLeft: '3%',
    marginRight:'2%',
    fontFamily: 'AbrilFatface',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 35,
    lineHeight: 62,
    color: '#5C514D',}}>Basic Info</Text>
    <View style={styles.entry_container}>
      <Text style={styles.text_til}>EMAIL</Text>
      <TextInput
        style={styles.email_input} placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.text_til}>PASSWORD</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      <Text style={styles.text_til}>NAME</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter name'
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='name'
        rightIcon={rightIcon}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.text_til}>HEIGHT (in cms)</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter Height'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='numeric'
        textContentType='height'
        rightIcon={rightIcon}
        value={height}
        onChangeText={text => setHeight(text)}
      />
      <Text style={styles.text_til}>WEIGHT (in lbs)</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter Weight'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='numeric'
        textContentType='weight'
        rightIcon={rightIcon}
        value={weight}
        onChangeText={text => setWeight(text)}
      />
      <Text style={styles.text_til}>WAIST (in inches)</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter Waist'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='numeric'
        textContentType='waist'
        rightIcon={rightIcon}
        value={waist}
        onChangeText={text => setWaist(text)}
      />
      <View style={{marginLeft:'-2.5%',padding:10}}>
      <Text style={styles.text_til}>GENDER</Text>
        <DropDownPicker
      open={open}
      value={value}
      items={gender}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setGender}
      
    />
     </View>
     <Text style={{fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 62,
    color: '#5C514F',
    marginLeft:'4%',marginBottom: '-5%',marginTop:'45%'}}>PROFILE PICTURE</Text>
    <View style={{marginLeft:'-5%'}}><Button title='Choose Photo' onPress={() => pickImage()}/>
        <Button title='Take Picture' onPress={() => takePicture()}/>
        <Camera ref={ref => setCamera(ref)}/>
        {image && <Image source={{uri:image}} style={{width:300, height:300, marginLeft:'3%',borderRadius:150}}/>}
        </View>
        </View>
     
      {signupError ? <Error error={signupError} visible={true} /> : null}
      <View style={styles.b_container}>
      <Styledbutton type="Submit" content="SUBMIT" onPress={onPress}/>
      
      </View>
      <Button style={styles.button}
        onPress={() => navigation.navigate('Main')}
        title='Go to Login'
        color='#000'
      />
      </ScrollView>
      
    </View>
  );
}
const styles = StyleSheet.create({
    clothContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      
      backgroundColor: '#f3f0ec'

  },
  b_container:{ 
    marginTop:'15%',
    marginBottom:'5%',
    width:'65%',
    marginLeft:'48%'
  },
  text_til: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 62,
    color: '#5C514F',
    marginLeft:'4%',marginBottom: '-5%'
  },
  titles: {
    position: 'absolute',
    textAlign: 'center',
    marginLeft:'3%'
  },
  entry_container: {
    marginTop:'1%',
    alignContent:'center',
    justifyContent:'center',
    marginLeft:'5%'
  },
  email_input: {
    width: 280,
    height: 50,
    backgroundColor: '#ffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25, 
    fontSize: 16,
    shadowColor: 'grey',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pass_input: {
    width: 280,
    height: 50,
    backgroundColor: '#ffff',
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25, 
    fontSize: 16,
    shadowColor: 'grey',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  button:{
    marginTop:'-20%'
  }
});

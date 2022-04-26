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
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { bottomwear_data } from './product_item.js';


const Add_cat=({navigation})=>{
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [opencat, setOpencat] = useState(false);
  const [openstl, setOpenstl] = useState(false);
  const [openwo, setOpenwo] = useState(false);
  const onCatOpen = useCallback(() => {
    setOpenstl(false);setOpenwo(false);
  }, []);

  const onStlOpen = useCallback(() => {
    setOpencat(false);setOpenwo(false);
  }, []);

  const onWoOpen = useCallback(() => {
    setOpencat(false);setOpenstl(false);
  }, []);
  const [valuecat, setValuecat] = useState(null);
  const [valuestl, setValuestl] = useState(null);
  const [valuewo, setValuewo] = useState(null);
  const[cat,setCat]=useState([{label:'Top',value:'Top'},
  {label:'Bottomwear',value:'Bottomwear'},
  {label:'Dress',value:'Dress'},
  {label:'Jacket',value:'Jacket'},
  {label:'Footwear',value:'Footwear'},
  {label:'Accessories',value:'Accessories'}
  ]);
  const[stl,setStl]=useState([{label:'Casual',value:'Casual'},
  {label:'Cocktail',value:'Cocktail'},
  {label:'Business',value:'Business'},
  {label:'Sporty',value:'Sporty'}
]);
const[worn,setWorn]=useState([{label:'Worn',value:'Worn'},
  {label:'Not Worn',value:'Not Worn'}])

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
      quality: 0.05,
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
  const uploadImage = async () => {
    /*bottomwear_data.push({id:bottomwear_data.length+1,image:image});
    console.log(bottomwear_data);*/
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
        db.collection('Pictures')
    .add({
      userId: currentUser.uid,
      postImg: url,
      postTime: firebase.firestore.Timestamp.fromDate(new Date()),
      category: valuecat,
      occasion: valuestl,
      worn_st: valuewo
    })
        blob.close()
        return url;
      });
    })
  }
  return(
    <View style={stylem.container}>
      <View style={stylem.camcontainer}>
      <View style={{}}>
      <TouchableOpacity style={{
    position: 'absolute'
  }} onPress={()=>navigation.navigate('Wardrobe')}>
    <Image source={require('../../assets/images/arrowback.jpeg')} style={{width:25,height:25,marginTop:'10%',marginLeft:'9%'}} />
    </TouchableOpacity>
    </View>
      
      <View style={{marginHorizontal:'7%',marginBottom:'25%'}}><Text style={stylem.text}>Choose Category</Text>
        <DropDownPicker
      open={opencat}
      onOpen={onCatOpen}
      value={valuecat}
      items={cat}
      setOpen={setOpencat}
      setValue={setValuecat}
      setItems={setCat}
      zIndex={3000}
    zIndexInverse={1000}
    />
    
      <Text style={stylem.text}>Choose Occasion</Text>
        <DropDownPicker
      open={openstl}
      onOpen={onStlOpen}
      value={valuestl}
      items={stl}
      setOpen={setOpenstl}
      setValue={setValuestl}
      setItems={setStl}
      zIndex={2000}
    zIndexInverse={2000}
    />
    <Text style={stylem.text}>Choose Worn Status</Text>
    <DropDownPicker
      open={openwo}
      onOpen={onWoOpen}
      value={valuewo}
      items={worn}
      setOpen={setOpenwo}
      setValue={setValuewo}
      setItems={setWorn}
      zIndex={1000}
    zIndexInverse={3000}
    />
    </View>
        <ScrollView style={{marginTop:'10%'}}>
        <Button title='Choose Photo' onPress={() => pickImage()}/>
        <Button title='Take Picture' onPress={() => takePicture()}/>
        <Camera ref={ref => setCamera(ref)}/>
        {image && <Image source={{uri:image}} style={{width:300, height:300, marginLeft:'3%'}}/>}
        {!uploading?<Button title='Upload Photo' onPress={()=> uploadImage()}/>: <ActivityIndicator size="large" color="#000"/>}
        </ScrollView>
        </View>

        
    </View>
    );
};
export default Add_cat;
export {bottomwear_data};
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
},
text: {
    marginLeft: '3%',
    marginRight:'2%',
    fontFamily: 'AbrilFatface',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 15,
    lineHeight: 32,
    color: '#5C514D'}
});
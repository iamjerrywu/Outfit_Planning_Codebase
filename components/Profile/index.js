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
  Alert,ScrollView,FlatList,
  ActivityIndicator,TouchableOpacity
} from 'react-native';
const Profile=({navigation})=>{
    const[image,setImage]=useState('');
    const[name,setName]=useState("");
    const occasion=[{id:'Casual',value:'Casual_save'},
    {id:'Cocktail',value:'Cocktail_save'},
    {id:'Business',value:'Business_save'},
    {id:'Sporty',value:'Sporty_save'}
  ];
    db.collection("Userdata").doc(auth.currentUser.uid).get().then((doc) => {  //Note the return here
      if (doc.exists) {
        setImage(doc.data().user_prof);
              setName(doc.data().name);
              
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
    <View style={stylem.container}>
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
        <View style={stylem.box3}>
      <Text style={stylem.title3}>Saved Outfits</Text>
      <View style={stylem.box3_1}>
      <FlatList data={occasion} renderItem={({item})=> 
      <TouchableOpacity style={stylem.cat1} onPress={()=>navigation.navigate(item.value)}>
      <View style={stylem.box4}><Text style={stylem.ouft1}> {item.id}</Text></View>
    </TouchableOpacity>} keyExtractor={({id})=>id} style={{
        flex:1,
        position:'relative',
        
        width: '100%', height: '100%',marginTop:'%'
        
      }}/>
           </View> 
        </View>
      </View>
    );
};
export default Profile;
const stylem = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f0ec',
    position: 'relative',
    marginTop:'1%',marginHorizontal:'6%'
  },
  
  title1: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'left',
    fontSize: 20,
    lineHeight: 58,
    color: '#5C514D',
    marginTop: '12%',
    marginRight:'3%',
    marginLeft: '5%',
  },
  box1:{
    width: 280,
    height: 130,
    left: 12, right:20,
    position:'absolute',
    backgroundColor:'#fcf9f6',
    borderRadius: 5,
    marginTop: '30%',marginLeft:'2%'
  },
  title2: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'right',
    fontSize: 18,
    lineHeight: 28,
    color: '#5C514D',
    marginTop: '8%',
    marginRight:'1%',
    marginLeft: '2%',
  },
  box2:{
    backgroundColor: '#f3f0ec',
    position:'relative',
    marginTop: '50%',
    width: 300, height: 220, marginLeft:'3%'
  },
  image1: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 70, height: 70,marginTop:'7%',marginLeft: '5%'
  },
  image2: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 30, height: 70,marginTop:'7%',marginLeft: '35%'
  },
  image3: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 40, height: 75,marginTop:'7%', marginLeft: '68%'
  },
  image4: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 70, height: 10,marginTop:'37%',marginLeft: '5%'
  },
  image5: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 30, height: 30,marginTop:'37%',marginLeft: '35%'
  },
  image6: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 50, height: 75,marginTop:'37%',marginLeft: '68%'
  },
  cat1: {
    position: 'relative',
  },
  title3: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'center',
    fontSize: 18,
    lineHeight: 28,
    color: '#5C514D',
    marginTop: '1%',
    marginRight:'1%',
    marginLeft: '1%',
  },
  box3:{
    position:'relative',
    width: 300, height: 220, marginLeft:'-2%',marginTop:'6%'
  },
  box3_1:{
    position:'relative',
    width: 300, height: 190, marginTop:'11%',
  },
  box4:{
    backgroundColor: '#DBCFC5',
    width: 300, height: 100,marginTop:'15%',borderRadius:25
  },
  image7: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 120, height: 130,marginTop:'12%',marginLeft: '5%'
  },
  image8: {
    position:'absolute',
    backgroundColor: '#fcf9f6',
    width: 120, height: 148,marginTop:'12%',marginLeft: '55%'
  },
  ouft1: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'center',
    fontSize: 16,
    lineHeight: 28,
    color: '#5C514D',
    marginTop: '10%',
    marginRight:'1%',
    marginLeft: '29%'
  },
  ouft2: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'right',
    fontSize: 16,
    lineHeight: 28,
    color: '#5C514D',
    marginTop: '40%',
    marginRight:'1%',
    marginLeft: '52%',
  },
});
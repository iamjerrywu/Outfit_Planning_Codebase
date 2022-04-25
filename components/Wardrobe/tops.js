import React, { Component,useState,useEffect} from 'react';
import {View, Text,StyleSheet,Button,Image,TouchableOpacity, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import stylem_top from './stylem_top';
import {firebase,auth,db} from '../firebase/config.js';
import { FlatList } from 'react-native-gesture-handler';
import {top_data} from './product_item';
const Tops=({navigation})=>{
  

    return(
    <View style={stylem_top.container}>
    <View>
    <TouchableOpacity style={{
    position: 'relative',
  }} onPress={()=>navigation.navigate('Wardrobe')}>
    <Image source={require('../../assets/images/arrowback.jpeg')} style={{width:25,height:25,marginTop:'12%',marginLeft:'4%'}} />
    <Text style={stylem_top.title1}>Tops</Text>
    </TouchableOpacity>
        
    </View>
    <View style={stylem_top.box2}>
      <FlatList data={top_data} renderItem={({item})=> 
      <Image source={item.image} style={{
        position:'relative',
        backgroundColor: '#fcf9f6',
        resizeMode:'contain',
        marginBottom:'2%',marginLeft:'20%',marginTop:'2%'
        
      }}/>} keyExtractor={({id})=>id} style={{
        flex:1,
        position:'relative',
        backgroundColor: '#fcf9f6',
        width: '100%', height: '100%',marginTop:'%'
        
      }}/>
      
      
    </View>
  </View>
);
};
export default Tops;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EC'
  },
  
  
});
import React, { Component,useState } from 'react';
import {View, Text,StyleSheet,Button,Image,TouchableOpacity, FlatList} from 'react-native';
import stylem from './stylem';
import Styledbutton from '../StyledButton';
import { collection, query, where, getDocs } from "firebase/firestore";
import {firebase,auth,db} from '../firebase/config.js';

const currentUser=auth.currentUser;


const Wardrobe=({navigation})=>{
  const occasion=[{id:'Casual',value:'Casual_save'},
    {id:'Cocktail',value:'Cocktail_save'},
    {id:'Business',value:'Business_save'},
    {id:'Sporty',value:'Sporty_save'}
  ];
  
  return(
    <View style={stylem.container}>
    <View>
        <Text style={stylem.title1}>My Wardrobe</Text>
    </View>
    <View style={stylem.box1}>
        <Text style={stylem.title2}>By Category</Text>
        <TouchableOpacity style={{
    position: 'absolute',
  }} onPress={()=>navigation.navigate('Add_cat')}>
    <Image source={require('../../assets/icons/add.jpeg')} style={{width:25,height:25,marginTop:'9%',marginLeft:'88%'}} />
    </TouchableOpacity>
    </View>
    <View style={stylem.box2}>
    <TouchableOpacity style={stylem.cat1} onPress={()=>navigation.navigate('Tops')}>
      <Image source={require('../../assets/icons/tops.png')} style={stylem.image1} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>navigation.navigate('Bottomwear')}>
      <Image source={require('../../assets/icons/bottomwear.png')} style={stylem.image2} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>navigation.navigate('Footwear')}>
      <Image source={require('../../assets/icons/footwear.png')} style={stylem.image3} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>navigation.navigate('Dresses')}>
      <Image source={require('../../assets/icons/dress.png')} style={stylem.image4} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>navigation.navigate('Jackets')}>
      <Image source={require('../../assets/icons/jacket.png')} style={stylem.image5} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>navigation.navigate('Accessories')}>
      <Image source={require('../../assets/icons/belt.png')} style={stylem.image6} />
    </TouchableOpacity>
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
export default Wardrobe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EC'
  },
  
  
});
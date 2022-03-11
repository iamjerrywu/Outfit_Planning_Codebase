import React, { Component } from 'react';
import {View, Text,StyleSheet,Button,Image,TouchableOpacity, FlatList,} from 'react-native';
import stylem from './stylem';
import Styledbutton from '../StyledButton';
const Wardrobe=({navigation})=>{
  return(
    <View style={stylem.container}>
    <View>
        <Text style={stylem.title1}>My Wardrobe</Text>
    </View>
    <View style={stylem.box1}>
        <Text style={stylem.title1}>By Category</Text>
        
        <View style={stylem.button}>
        <Styledbutton type="Style it seems" content="STYLE ME!" onPress={()=>{console.warn("Button has been pressed")}}/>
        </View>
    </View>
    <View style={stylem.box5}>
        <Image source={require('../../assets/images/group1.png')} style={stylem.image2} />
        <Text style={stylem.title4}>Today's Outfit</Text>
        <TouchableOpacity style={stylem.btn} onPress={()=>navigation.navigate('home2_pickaday')}>
            <Image source={require('../../assets/icons/arrow.png')}/>
        </TouchableOpacity>
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
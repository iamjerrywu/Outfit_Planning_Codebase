import React, { Component } from 'react';
import {View, Text,StyleSheet,Button,Image,TouchableOpacity, FlatList} from 'react-native';
import stylem from './stylem';
import Styledbutton from '../StyledButton';
const Wardrobe=({navigation})=>{
  return(
    <View style={stylem.container}>
    <View>
        <Text style={stylem.title1}>My Wardrobe</Text>
    </View>
    <View style={stylem.box1}>
        <Text style={stylem.title2}>By Category</Text>
    </View>
    <View style={stylem.box2}>
    <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn("Tops was pressed")}>
      <Image source={require('../../assets/icons/tops.png')} style={stylem.image1} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn("Pants was pressed")}>
      <Image source={require('../../assets/icons/bottomwear.png')} style={stylem.image2} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn("Footwear was pressed")}>
      <Image source={require('../../assets/icons/footwear.png')} style={stylem.image3} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn("Dresses was pressed")}>
      <Image source={require('../../assets/icons/dress.png')} style={stylem.image4} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn("Jacket was pressed")}>
      <Image source={require('../../assets/icons/jacket.png')} style={stylem.image5} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn("Accessories was pressed")}>
      <Image source={require('../../assets/icons/belt.png')} style={stylem.image6} />
    </TouchableOpacity>
    </View>
    <View style={stylem.box3}>
      <Text style={stylem.title3}>Saved Outfits</Text>
      <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn('Running Errands ...')}>
        <Image source={require('../../assets/images/group1.png')} style={stylem.image7} />
        <Text style={stylem.ouft1}> Running Errands</Text>
      </TouchableOpacity>
            <TouchableOpacity style={stylem.cat1} onPress={()=>console.warn('Cocktail Party ...')}>
                <Image source={require('../../assets/images/group2.png')} style={stylem.image8}/>
                <Text style={stylem.ouft2}> Cocktail Party</Text>
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
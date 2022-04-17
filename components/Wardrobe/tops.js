import React, { Component } from 'react';
import {View, Text,StyleSheet,Button,Image,TouchableOpacity, FlatList,} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import stylem_top from './stylem_top';
const Tops=({navigation})=>{
    let data = [{
        value: 'Color',
      }, {
        value: 'Cloth Type',
      }, {
        value: 'Worn',
      }];
              return(
    <View style={stylem_top.container}>
    <View>
        <Text style={stylem_top.title1}>Tops</Text>
    </View>
    <View style={stylem_top.box1}>
    <Dropdown style={stylem_top.box1_1}
          label='Sort By'
          data={data}
        />
    <Dropdown style={stylem_top.box1_2} label='Filter'
          data={data}
        />
    </View>
    <View style={stylem_top.box2}>
    <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
      <Image source={require('../../assets/images/top_1.png')} style={stylem_top.image1} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
      <Image source={require('../../assets/images/top_2.png')} style={stylem_top.image2} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
      <Image source={require('../../assets/images/top_3.png')} style={stylem_top.image3} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
      <Image source={require('../../assets/images/top_4.png')} style={stylem_top.image4} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
      <Image source={require('../../assets/images/top_5.png')} style={stylem_top.image5} />
    </TouchableOpacity>
    
    <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
      <Image source={require('../../assets/images/top_6.png')} style={stylem_top.image6} />
    </TouchableOpacity>
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
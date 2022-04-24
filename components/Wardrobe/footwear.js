import React, { Component } from 'react';
import {View, Text,StyleSheet,Button,Image,TouchableOpacity, FlatList,} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { footwear_data } from './product_item';
import stylem_top from './stylem_top';
const Footwear=({navigation})=>{
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
                <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
                <Image source={require('../../assets/images/arrowback.jpeg')} style={{width:25,height:25,marginTop:'12%',marginLeft:'4%'}} />
                <Text style={stylem_top.title1}>Footwear</Text>
                </TouchableOpacity>
                    
                </View>
                <View style={stylem_top.box2}>
                  <FlatList data={footwear_data} renderItem={({item})=> 
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
export default Footwear;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EC'
  },
  
  
});
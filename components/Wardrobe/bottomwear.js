import React, { Component } from 'react';
import {View, Text,StyleSheet,Button,Image,TouchableOpacity, FlatList,} from 'react-native';
import stylem_top from './stylem_top';
import {bottomwear_data} from './add_category';
const Bottomwear=({navigation})=>{
  console.log(bottomwear_data);
              return(
                <View style={stylem_top.container}>
    <View>
    <TouchableOpacity style={stylem_top.cat1} onPress={()=>navigation.navigate('Wardrobe')}>
    <Image source={require('../../assets/images/arrowback.jpeg')} style={{width:25,height:25,marginTop:'12%',marginLeft:'4%'}} />
    <Text style={stylem_top.title1}>Bottomwear</Text>
    </TouchableOpacity>
        
    </View>
    <View style={stylem_top.box2}>
    <FlatList data={bottomwear_data} renderItem={({item})=> 
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
export default Bottomwear;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EC'
  },
  
  
});
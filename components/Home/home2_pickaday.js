import React, { Component } from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import Styledbutton from '../StyledButton';
import stylem from './stylem';
const Home2_pickaday=({navigation})=>{
    const username='Akshara';
    const worn=10;
    const total=40;
    const stat = (worn /total) *100 +'%';
    return(
        <View style={stylem.container}>
        <View>
            <Text style={stylem.title1}>Welcome Back, {username}</Text>
        </View>
        <View style={stylem.box1}>
            <Image source={require('../../assets/images/Group.jpg')} />
            <Text style={stylem.title2}>Digitize your closet</Text>
            <View style={stylem.button}>
            <Styledbutton type="Style it seems" content="STYLE ME!" onPress={()=>{console.warn("Button has been pressed")}}/>
            </View>
        </View>
        </View>
    );};
    export default Home2_pickaday;
import React, { Component } from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import Styledbutton from '../StyledButton';
import stylem from './stylem';
import home2_pickaday from './home2_pickaday';
const Homepage=({navigation})=>{
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
        <View style={stylem.box2}>
            <Text style={stylem.title3}>{stat} of your closet worn</Text>
            {/*<View style={stylem.stat}>
            <View style={stylem.box3}></View>
            <View style={stylem.box4}></View>
            <View style={stylem.box4}></View>
            <View style={stylem.box4}></View>
    </View>*/}

        </View>
        <View style={stylem.box2}>
            <Text style={stylem.title3}>{stat} of your closet worn</Text>
            <View style={stylem.stat}>
            <View style={stylem.box3}>
                <Text style={stylem.text}>{total} Total Items</Text>
            </View>
            <View style={stylem.box4}>
                <Text style={stylem.text}>{worn} Worn Items</Text>
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
      </View>
    );
};

export default Homepage;

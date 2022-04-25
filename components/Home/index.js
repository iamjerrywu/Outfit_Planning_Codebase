import React, { Component } from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Styledbutton from '../StyledButton';
import { auth } from '../firebase/config';
import stylem from './stylem';
import {top_data,bottomwear_data,dress_data,jacket_data,footwear_data,accessories_data} from '../Wardrobe/product_item';
const Homepage=({navigation})=>{
    const username=auth.currentUser?.email;
    const worn=10;
    const total=top_data.length + bottomwear_data.length + dress_data.length + jacket_data.length + footwear_data.length + accessories_data.length;
    const stat = (worn /total).toFixed(2) *100 +'%';


    return(
        <View style={stylem.container}>
        <View>
            <Text style={stylem.title1}>Welcome Back, {username}</Text>
        </View>
        <View style={stylem.box1}>
            <Image source={require('../../assets/images/Group.jpg')} />
            <Text style={stylem.title2}>Digitize your closet</Text>
            <View style={stylem.button}>
            <Styledbutton type="Style it seems" content="STYLE ME!" onPress={()=>navigation.navigate('Home2_pickaday')}/>
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
            <TouchableOpacity style={stylem.btn} onPress={()=>navigation.navigate('Home2_pickaday')}>
                <Image source={require('../../assets/icons/arrow.png')}/>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    );
};

export default Homepage;


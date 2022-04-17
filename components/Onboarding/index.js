import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {firebase} from '../firebase/config.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
import Signup from './signup';
import Main_ls from './main_ls';
import Tab_controller from '../tab_controller.js';

const Stack= createStackNavigator();
export default function Onb(navigation){
  return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name="Main" component={Main_ls} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={Signup} options={{headerShown: false}} />
            <Stack.Screen name="Tab_controller" component={Tab_controller} options={{headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
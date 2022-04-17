/*
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Onb from './components/Onboarding/index';
import { View,StyleSheet,Text} from 'react-native';
export default function App(){
  return (
      <Onb/>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

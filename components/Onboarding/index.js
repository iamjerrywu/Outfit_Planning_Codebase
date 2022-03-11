import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Styledbutton from '../StyledButton';
const Onb=({navigation})=>{
  return(
        <View style={styles.clothContainer}>
        
        <View style={styles.titles}>
        <Text style={styles.title1}>OUTFIT PLANNER</Text>
        <Text style={styles.title2}>Worry less. Save Time.</Text>
        <Text style={styles.title3}>Looks good. Feel Better.</Text>
        </View>
        <View style={styles.buttonsContainer}>

        <Styledbutton
        type="Login it seems"
        content="Login"
        onPress={()=>navigate('login')}
        />
        <Styledbutton
        type="Get started it seems"
        content="Get Started"
        onPress={() => {console.warn("Get Started was pressed");} }
        />
        </View>
      </View>
    );
};
export default Onb;
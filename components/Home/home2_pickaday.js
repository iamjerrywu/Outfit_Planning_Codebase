import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useState } from 'react';
import {View, Text,Image,TouchableOpacity, StyleSheet} from 'react-native';
import Tabs from '../../navigation/tabs';
import DropDownPicker from 'react-native-dropdown-picker';
import Styledbutton from '../StyledButton';
const Home2_pickaday=({navigation})=>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const[occasion,setOccasion]=useState([{label:'Casual',value:'Casual'},
    {label:'Cocktail',value:'Cocktail'},
    {label:'Business',value:'Business'},
    {label:'Sporty',value:'Sporty'}
  ]);
    return(
            <View style={styles.container}>
              <TouchableOpacity style={{
    position: 'absolute',
  }} onPress={()=>navigation.navigate('Homepage')}>
    <Image source={require('../../assets/images/arrowback.jpeg')} style={{width:25,height:25,marginTop:'185%',marginLeft:'4%'}} />
    </TouchableOpacity>
    <View style={styles.box1}>
              <Text style={styles.title1}>Pick an Occassion</Text>
              </View>
            
            
        <View style={styles.box2}>
        <DropDownPicker
      open={open}
      value={value}
      items={occasion}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setOccasion}
      
    />
        </View>
            <View style={styles.button}>
            <Styledbutton type="Style it seems" content="SHOW OUTFIT" onPress={()=>navigation.navigate(value)}/>
            </View>
        </View>
    );};
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#f3f0ec',
          
        },
  title1: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'left',
    fontSize: 20,
    lineHeight: 58,
    color: '#5C514D',
    marginTop: '10%',
    marginLeft: '5%',
  },
  box1:{
    width: 280,
    height: 280,
    position:'absolute',
    marginTop: '8%',marginLeft:'9%'
  },
  
  button: {
    position:'absolute',
    marginTop: '152%',
    width: '75%',
    marginLeft:'15%'
  },
  box2:{
    width: 280,
    height: 280,

    position:'absolute',
    borderRadius: 10,
    marginTop: '32%',marginLeft:'5%'
  },
  text: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'right',
    fontSize: 18,
    lineHeight: 28,
    color: '#000000',
    marginTop: '2%',
    marginLeft: '2%',
  },
  image2: {
    position:'absolute',
    width: '60%',
    height: 170,
    marginTop:'10%',marginLeft: '15%'
  },
  title2: {
    position:'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign:'right',
    fontSize: 19,
    lineHeight: 28,
    color: '#5C514D',
    marginLeft: '5%',
  },
  rbutton: {
    
  }
});
export default Home2_pickaday;
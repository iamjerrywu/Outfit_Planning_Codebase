import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useState,useRef } from 'react';
import {View, Text,Image,TouchableOpacity, StyleSheet, Dimensions, Alert} from 'react-native';
import Carousel,{Pagination} from 'react-native-snap-carousel'
import { top_data } from '../Wardrobe/product_item';
import Tabs from '../../navigation/tabs';
import DropDownPicker from 'react-native-dropdown-picker';
import Styledbutton from '../StyledButton';
const Business=({navigation})=>{
    const isCarousel = React.useRef(null)
    const [uploading, setUploading] = useState(false);
    const [indexSelected, setIndexSelected] = useState(0);
    const onSelect = indexSelected => {
    setIndexSelected(indexSelected);
  };
    const SLIDER_WIDTH = Dimensions.get('window').width + 80
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
    return(
        <View style={styles.container}>
              <View style={styles.box1}>
                  <TouchableOpacity style={{
    position: 'absolute'
}} onPress={()=>navigation.navigate('Create')}>
  <Image source={require('../../assets/images/arrowback.jpeg')} style={{width:25,height:25,marginTop:'85%',marginLeft:'6%'}} />
  </TouchableOpacity>
    
              <Text style={styles.title1}>Business Outfit Suggestions</Text>
              </View>
              <View style={styles.box2}>
      <Carousel style={styles.carousel}
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={top_data}
        renderItem={({ item, index }) => (
            <Image
              key={index}
              style={{ width: '100%', height: '100%' }}
              resizeMode='contain'
              source={item.image}
            />
          )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={index => onSelect(index)}
        
      />
      
    </View>
    <View style={styles.button}>
    {!uploading?<Styledbutton type="Style it seems" content="SAVE OUTFIT" onPress={()=>Alert.alert("Outfit was saved")}/>: <ActivityIndicator size="large" color="#000"/>}
    
    </View>
              </View>
    );
};
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
fontSize: 18,
lineHeight: 58,
color: '#5C514D',
marginTop: '6%',
marginLeft: '10%',
},
box1:{
width: 500,
height: 300,
position:'absolute',
marginTop: '8%',marginLeft:'3%'
},

button: {
position:'absolute',
marginTop: '165%',
width: '75%',
marginLeft:'15%'
},
box2:{
width: 350,
height: 340,

position:'absolute',
borderRadius: 10,
marginTop: '40%',marginLeft:'-13%'
},
carousel:{
    
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
export default Business;
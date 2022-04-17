import React from 'react';
import {View, Text, Pressable,Image} from 'react-native';
import styles from './styles';
import {useFonts} from 'expo-font';

const Styledbutton = (props) => {
    const type=props.type;
    const content=props.content;
    const onPress=props.onPress;
    const [loaded] = useFonts({
      AbrilFatface: require('../../assets/fonts/AbrilFatface-Regular.ttf'),
    });
    return(
        <View style={styles.container}>
        <Pressable style={styles.button} onPress={onPress}>
        
        <Text style={{fontFamily: 'AbrilFatface',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 62,
    textAlign: 'center',
    color: '#EBE9E7',
    textTransform: 'uppercase',}}>{content}</Text>
            
        </Pressable>
      </View>
    );
};
export default Styledbutton;
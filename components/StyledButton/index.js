import React from 'react';
import {View, Text, Pressable,Image} from 'react-native';
import styles from './styles';

const Styledbutton = (props) => {
    const type=props.type;
    const content=props.content;
    const onPress=props.onPress;
    return(
        <View style={styles.container}>
        <Pressable style={styles.button} onPress={onPress}>
        
        <Text style={styles.text}>{content}</Text>
            
        </Pressable>
      </View>
    );
};
export default Styledbutton;
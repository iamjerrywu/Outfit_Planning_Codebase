import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Styledbutton from '../StyledButton';
import {app,auth,db} from '../firebase/config.js'
import styles from './styles';
import {useFonts} from 'expo-font';
const Main_ls=({navigation})=> {
    const [loaded] = useFonts({
        AbrilFatface: require('../../assets/fonts/AbrilFatface-Regular.ttf'),
        Fredoka: require('../../assets/fonts/Fredoka_Expanded-Bold.ttf')
      });
      return (
    <View style={styles.clothContainer}>
        
    <View style={styles.titles}>
    <Text style={{fontFamily: 'Fredoka',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 30,
    lineHeight: 62,
    textAlign: 'center',
    color: '#5C514D',
    marginTop: '15%'}}>FITCHECK</Text>
    <Text style={{marginTop: '15%',
    marginLeft: '4%',
    marginRight:'30%',
    fontFamily: 'AbrilFatface',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 35,
    lineHeight: 62,
    color: '#5C514D',}}>Worry less. Save Time.</Text>
    <Text style={{marginTop: '15%',
    marginLeft: '28%',
    marginRight:'1%',
    fontFamily: 'AbrilFatface',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 35,
    lineHeight: 62,
    color: '#5C514D',}}>Looks good. Feel Better.</Text>
    </View>
    <View style={{marginTop:'157%',marginBottom:'20%'}}>

    <Styledbutton
    type="Login it seems"
    content="Login"
    onPress={()=>navigation.navigate('Login')}
    />
    <Styledbutton
    type="Sign Up it seems"
    content="Sign Up"
    onPress={() => navigation.navigate('SignUp') }
    />
    
    </View>
  </View>

  )
}
export default Main_ls;

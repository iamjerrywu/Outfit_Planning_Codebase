import React, { useEffect } from 'react';
import {Text, View, TextInput,Pressable} from 'react-native';
import { useState } from 'react';
import Styledbutton from '../StyledButton/index.js';
import {firebase,auth} from '../firebase/config.js';
import {useNavigation} from '@react-navigation/core';
import Error from './Error.js';
import styles from './styles';



const Login =({navigation})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [loginError, setLoginError] = useState('');
  
    const handlePasswordVisibility = () => 
    {
      if (rightIcon === 'eye') 
      {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } 
      else if (rightIcon === 'eye-off') 
      {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    const onLogin = async () => {
        try {
          if (email !== '' && password !== '') {
            auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
              const user = userCredentials.user;
              navigation.navigate("Tab_controller")
            });
          }
        } catch (error) {
          setLoginError(error.message);
        }
      };
  return (
    <View style={styles.clothContainer}>
        
        <View style={styles.titles}>
        <Text style={{marginTop: '30%',
    marginLeft: '3%',
    marginRight:'2%',
    fontFamily: 'AbrilFatface',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 35,
    lineHeight: 62,
    color: '#5C514D',}}>Welcome back!</Text>
        </View>
        <View style={styles.entry_container}>
            <Text style={styles.text_til}>EMAIL</Text>
        <TextInput
        style={styles.email_input} placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.text_til}>PASSWORD</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
        </View>
        {loginError ? <Error error={loginError} visible={true} /> : null}
        <View style={styles.buttonsContainer}>
    
        <Styledbutton
        type="Login it seems"
        content="LOG IN"
        onPress={onLogin}
        />
        <Pressable onPress={()=>navigation.navigate('SignUp')}>
        <Text style={{fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 62,
    color: '#5C514F',
    marginTop: '-8%',
    marginLeft:'23%',}}>Not registered? Sign up now</Text>
    </Pressable>
        </View>
    </View>
  )
}
export default Login
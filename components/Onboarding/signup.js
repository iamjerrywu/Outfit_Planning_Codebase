import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Styledbutton from '../StyledButton/index.js';
import {firebase,auth} from '../firebase/config.js';

import Error from './Error.js';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [signupError, setSignupError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
          const user = userCredentials.user;
          navigation.navigate('Login');
        });
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <View style={styles.clothContainer}>
      
      <Text style={{marginTop: '25%',
    marginLeft: '3%',
    marginRight:'2%',
    fontFamily: 'AbrilFatface',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 35,
    lineHeight: 62,
    color: '#5C514D',}}>Basic Info</Text>
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
      {signupError ? <Error error={signupError} visible={true} /> : null}
      <View style={styles.b_container}>
      <Styledbutton type="Submit" content="SUBMIT" onPress={onHandleSignup}/>
      </View>
      <Button
        onPress={() => navigation.navigate('Main')}
        title='Go to Login'
        color='#fff'
      />
    </View>
  );
}
const styles = StyleSheet.create({
    clothContainer: {
      position: 'relative',
      width: '98%',
      height: '100%',
      
      backgroundColor: '#f3f0ec'

  },
  b_container:{ 
    marginTop:'80%',
    marginBottom:'20%',
    width:'65%',
    marginLeft:'48%'
  },
  text_til: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 62,
    color: '#5C514F',
    marginLeft:'4%',marginBottom: '-5%'
  },
  titles: {
    position: 'absolute',
    textAlign: 'center',
    marginLeft:'3%'
  },
  entry_container: {
    marginTop:'1%',
    alignContent:'center',
    justifyContent:'center',
    marginLeft:'5%'
  },
  email_input: {
    width: 280,
    height: 50,
    backgroundColor: '#ffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25, 
    fontSize: 16,
    shadowColor: 'grey',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pass_input: {
    width: 280,
    height: 50,
    backgroundColor: '#ffff',
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25, 
    fontSize: 16,
    shadowColor: 'grey',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  }
});

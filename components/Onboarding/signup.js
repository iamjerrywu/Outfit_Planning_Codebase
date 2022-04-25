import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Styledbutton from '../StyledButton/index.js';
import {firebase,auth} from '../firebase/config.js';
import DropDownPicker from 'react-native-dropdown-picker';

import Error from './Error.js';
import { ScrollView } from 'react-native-gesture-handler';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const[gender, setGender]=useState([{label:'Male',value:'Male'},
    {label:'Female',value:'Female'},
    {label:'Others',value:'Others'},
    {label:'Prefer Not to Say',value:'Prefer Not to Say'}
  ]);
  const [prefStyle, setprefStyle] = useState('');
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
      <ScrollView>
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
      <Text style={styles.text_til}>NAME</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter name'
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='name'
        rightIcon={rightIcon}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.text_til}>HEIGHT (in cms)</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter Height'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='numeric'
        textContentType='height'
        rightIcon={rightIcon}
        value={height}
        onChangeText={text => setHeight(text)}
      />
      <Text style={styles.text_til}>WEIGHT (in lbs)</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter Weight'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='numeric'
        textContentType='weight'
        rightIcon={rightIcon}
        value={weight}
        onChangeText={text => setWeight(text)}
      />
      <Text style={styles.text_til}>WAIST (in inches)</Text>
      <TextInput
        style={styles.pass_input} placeholder='Enter Waist'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='numeric'
        textContentType='waist'
        rightIcon={rightIcon}
        value={waist}
        onChangeText={text => setWaist(text)}
      />
      <View style={styles.box2}>
      <Text style={styles.text_til}>GENDER</Text>
        <DropDownPicker
      open={open}
      value={value}
      items={gender}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setGender}
      
    />
        </View>
      </View>
      {signupError ? <Error error={signupError} visible={true} /> : null}
      <View style={styles.b_container}>
      <Styledbutton type="Submit" content="SUBMIT" onPress={onHandleSignup}/>
      
      </View>
      <Button style={styles.button}
        onPress={() => navigation.navigate('Main')}
        title='Go to Login'
        color='#000'
      />
      </ScrollView>
      
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
    marginBottom:'5%',
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
  },
  button:{
    marginTop:'-20%'
  }
});

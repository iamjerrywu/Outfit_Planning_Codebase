import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {View, Text,Image,TouchableOpacity, StyleSheet} from 'react-native';
import Tabs from '../../navigation/tabs';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Styledbutton from '../StyledButton';
import { RadioButton } from 'react-native-paper';
const Home2_pickaday=({navigation})=>{
    const [checked, setChecked] = React.useState('first');
    return(
            <View style={styles.container}>
            <Text style={styles.title1}>Pick a Day</Text>
            <View style={styles.box1}>
            <Calendar style={styles.cal}
  // Initially visible month. Default = now
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2012-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
</View>
        <View style={styles.box2}>
            <Text style={styles.title2}>Pick an Occasion</Text>
            <View style={styles.rbutton}>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
            <Text style={styles.text}>Option 1</Text>
        </RadioButton>
        <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}>
            <Text style={styles.text}>Option 2</Text>
        </RadioButton>
        <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}>
            <Text style={styles.text}>Option 3</Text>
        </RadioButton>
        <RadioButton
        value="fourth"
        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fourth')}>
            <Text style={styles.text}>Option 4</Text>
        </RadioButton>
        <RadioButton
        value="fifth"
        status={ checked === 'fifth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fifth')}>
            <Text style={styles.text}>Option 5</Text>
        </RadioButton>
    </View>
            <View style={styles.button}>
            <Styledbutton type="Style it seems" content="SHOW OUTFIT" onPress={()=>navigation.navigate('Homepage')}/>
            </View>
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
    position:'relative',
    marginTop: '28%',marginLeft:'6%'
  },
  
  button: {
    position:'relative',
    marginTop: '12%',
    width: '75%',
  },
  box2:{
    width: 280,
    height: 280,

    position:'relative',
    borderRadius: 10,
    marginTop: '12%',
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
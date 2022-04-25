import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Tabs1,Tabs2,Tabs3,Tabs4,Tabs5} from '../navigation/tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab =createBottomTabNavigator();

const TAB_TO_RESET = 'Homepage';
const resetHomeStackOnTabPress = ({ navigation, route }) => ({
  tabPress: (e) => {
    const state = navigation.dangerouslyGetState();

    if (state) {
      // Grab all the tabs that are NOT the one we just pressed
      const nonTargetTabs = state.routes.filter((r) => r.key !== e.target);

      nonTargetTabs.forEach((tab) => {
        // Find the tab we want to reset and grab the key of the nested stack
        const tabName = tab?.name;
        const stackKey = tab?.state?.key;

        if (stackKey && tabName === TAB_TO_RESET) {
          // Pass the stack key that we want to reset and use popToTop to reset it
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: stackKey,
          });
        }
      });
    }
  },
});
export default function Tab_controller(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false, showLabel: false, style: {
        position: 'absolute',
        width: 391,
        height: 75,
        left: 0,
        top: 769,
        backgroundColor: '#F3F0EC',
        ...styles.shadow
    }}}>
        <Tab.Screen name="HOME" component={Tabs1} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/home.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'#000000',
                    }} listeners={resetHomeStackOnTabPress} />
                    <Text style={{color: focused ? '#5c514d':'#000000', fontSize:10}}>HOME</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="WARDROBE" component={Tabs2} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/wardrobe.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'#000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'#000000', fontSize:10}}>WARDROBE</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="CREATE" component={Tabs3} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/create.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'#000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'#000000', fontSize:10}}>CREATE</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="CALENDAR" component={Tabs4} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/calendar.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'#000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'#000000', fontSize:10}}>CALENDAR</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="PROFILE" component={Tabs5} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/profile.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'#000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'#000000', fontSize:10}}>PROFILE</Text>
                </View>
            )
        }}/>
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
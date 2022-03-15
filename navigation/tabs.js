import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text,View,Image,TouchableOpacity} from 'react-native';
import Homepage from '../components/Home';
import Calendar from '../components/Calendar';
import Create from '../components/Create';
import Profile from '../components/Profile';
import Wardrobe from '../components/Wardrobe';
import Tops from '../components/Wardrobe/tops';
const Tab =createBottomTabNavigator();

const Tabs=()=>{
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
        <Tab.Screen name="HOME" component={Homepage} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/home.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'000000', fontSize:10}}>HOME</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="WARDROBE" component={Wardrobe} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/wardrobe.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'000000', fontSize:10}}>WARDROBE</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="CREATE" component={Create} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/create.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'000000', fontSize:10}}>CREATE</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="CALENDAR" component={Calendar} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/calendar.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'000000', fontSize:10}}>CALENDAR</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="PROFILE" component={Profile} options={{
            tabBarIcon: ({focused})=> (
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 10}}>
                    <Image source={require('../assets/icons/profile.png')} 
                    resizeMode='contain' 
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#5c514d':'000000',
                    }} />
                    <Text style={{color: focused ? '#5c514d':'000000', fontSize:10}}>PROFILE</Text>
                </View>
            )
        }}/>
    </Tab.Navigator>
    );
}
export default Tabs;
const styles= StyleSheet.create(
    {
        shadow: {
            shadowOffset:{  width: 50,  height: 100,  },
shadowColor: 'black',
shadowOpacity: 0.25,
        }

});

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text,View,Image,TouchableOpacity} from 'react-native';
import Homepage from '../components/Home';
import Calendar from '../components/Calendar';
import Create from '../components/Create';
import Profile from '../components/Profile';
import Wardrobe from '../components/Wardrobe';
import Tops from '../components/Wardrobe/tops';
import Accessories from '../components/Wardrobe/accessories';
import Bottomwear from '../components/Wardrobe/bottomwear';
import Dresses from '../components/Wardrobe/dresses';
import Footwear from '../components/Wardrobe/footwear';
import Jackets from '../components/Wardrobe/jackets';
import Home2_pickaday from '../components/Home/home2_pickaday';
import Casual from '../components/Home/casual';
import Cocktail from '../components/Home/cocktail';
import Business from '../components/Home/business';
import Sporty from '../components/Home/sporty';
import Casual_save from '../components/Wardrobe/casual_save';
import Cocktail_save from '../components/Wardrobe/cocktail_save';
import Business_save from '../components/Wardrobe/business_save';
import Sporty_save from '../components/Wardrobe/sporty_save';
import {createStackNavigator} from "@react-navigation/stack";
import Add_cat from '../components/Wardrobe/add_category';
const Stack =createStackNavigator(); 

const Tabs1=()=>{
    return (
        <Stack.Navigator initialRouteName='Homepage'>
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }}/>
            <Stack.Screen name="Home2_pickaday" component={Home2_pickaday} options={{ headerShown: false }}/>
            <Stack.Screen name="Casual" component={Casual} options={{ headerShown: false }}/>
            <Stack.Screen name="Cocktail" component={Cocktail} options={{ headerShown: false }}/>
            <Stack.Screen name="Business" component={Business} options={{ headerShown: false }}/>
            <Stack.Screen name="Sporty" component={Sporty} options={{ headerShown: false }}/>
            <Stack.Screen name="Create" component={Create} options={{ headerShown: false }}/>
            <Stack.Screen name="Wardrobe" component={Wardrobe} options={{ headerShown: false }}/>
          </Stack.Navigator>
          
    );
}
export {Tabs1};
const Tabs2=()=>{
    return (
        <Stack.Navigator >
            <Stack.Screen name="Wardrobe" component={Wardrobe} options={{ headerShown: false }}/>
            <Stack.Screen name="Tops" component={Tops} options={{ headerShown: false }}/>
            <Stack.Screen name="Bottomwear" component={Bottomwear} options={{ headerShown: false }}/>
            <Stack.Screen name="Footwear" component={Footwear} options={{ headerShown: false }}/>
            <Stack.Screen name="Dresses" component={Dresses} options={{ headerShown: false }}/>
            <Stack.Screen name="Jackets" component={Jackets} options={{ headerShown: false }}/>
            <Stack.Screen name="Accessories" component={Accessories} options={{ headerShown: false }}/>
            <Stack.Screen name="Add_cat" component={Add_cat} options={{ headerShown: false }}/>
            <Stack.Screen name="Casual_save" component={Casual_save} options={{ headerShown: false }}/>
            <Stack.Screen name="Cocktail_save" component={Cocktail_save} options={{ headerShown: false }}/>
            <Stack.Screen name="Business_save" component={Business_save} options={{ headerShown: false }}/>
            <Stack.Screen name="Sporty_save" component={Sporty_save} options={{ headerShown: false }}/>
            <Stack.Screen name="Create" component={Create} options={{ headerShown: false }}/>
        </Stack.Navigator>
          
    );
}
export {Tabs2};
const Tabs3=()=>{
    return (
        <Stack.Navigator >
        <Stack.Screen name="Create" component={Create} options={{ headerShown: false }}/>
            <Stack.Screen name="Home2_pickaday" component={Home2_pickaday} options={{ headerShown: false }}/>
            <Stack.Screen name="Wardrobe" component={Wardrobe} options={{ headerShown: false }}/>
          </Stack.Navigator>
          
    );
}
export {Tabs3};
const Tabs4=()=>{
    return (
        <Stack.Navigator >
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }}/>
            <Stack.Screen name="Home2_pickaday" component={Home2_pickaday} options={{ headerShown: false }}/>
          </Stack.Navigator>
          
    );
}
export {Tabs4};
const Tabs5=()=>{
    return (
        <Stack.Navigator >
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
            <Stack.Screen name="Home2_pickaday" component={Home2_pickaday} options={{ headerShown: false }}/>
          </Stack.Navigator>
          
    );
}
export {Tabs5};
const styles= StyleSheet.create(
    {
        shadow: {
            shadowOffset:{  width: 50,  height: 100,  },
shadowColor: 'black',
shadowOpacity: 0.25,
        }

});

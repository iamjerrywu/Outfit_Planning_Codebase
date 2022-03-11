import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Onb from './components/Onboarding/index';
import login from './components/Onboarding/login';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Homepage from './components/Home';
import Home2_pickaday from './components/Home/home2_pickaday';

{/*const Stack = createStackNavigator(screens);*/}
export default function App(){
    return (
      <NavigationContainer>
        {/*<Stack.Navigator>
      <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="home2_pickaday" component={home2_pickaday} />
        </Stack.Navigator>*/}
      <Tabs />
      </NavigationContainer>
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

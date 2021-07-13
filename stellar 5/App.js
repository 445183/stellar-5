import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DailyPicScreen from './screens/dailyPic'
import SpaceCraftScreen from './screens/spaceCraft'
import StarMapScreen from './screens/starMap'
import HomeScreen from './screens/home';

const Stack=createStackNavigator();
  
export default class App extends React.Component{
  render(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}/> 
        <Stack.Screen name='DailyPic' component={DailyPicScreen} />
        <Stack.Screen name='SpaceCraft' component={SpaceCraftScreen} />
        <Stack.Screen name='StarMap' component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}
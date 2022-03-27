import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailPesanan from './DetailPesanan.js';
import DetailStackScreen from './DetailStackScreen';
// import OtherScreen from './OtherScreen';
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailPesanan} />
      <HomeStack.Screen name="DetailScreen" component={DetailStackScreen} />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;

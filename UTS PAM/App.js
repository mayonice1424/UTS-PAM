import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/screen/HomeStackScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PesananScreen from './src/screen/PesananScreen';
import PembatalanScreen from './src/screen/PembatalanScreen';
import OtherScreen from './src/screen/OtherScreen';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Beranda',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="home" size={30} color={color} />
            ),
          }}
          name="Beranda"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Pesanan Saya',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="book" size={30} color={color} />
            ),
          }}
          name="Pesanan"
          component={PesananScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Pembatalan',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="book-cancel"
                size={30}
                color={color}
              />
            ),
          }}
          name="Pembatalan"
          component={PembatalanScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Lainnya',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="reorder-four" size={30} color={color} />
            ),
          }}
          name="Lainnya"
          component={OtherScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import * as React from 'react';
import {Button, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import gaya from '../Styles/Styles';
const OtherScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginTop: 200,
          alignItems: 'center',
          justifyContent: 'center',
          width: 280,
          height: 280,
          backgroundColor: 'white',
          borderRadius: 6,
          shadowColor: '#000',
        }}>
        <Text>Ilham Nofri Yandra</Text>
        <Text>119140133</Text>
        <Text>PAM RA</Text>
        <Text>Tugas UTS PAM 2022</Text>
      </View>
    </View>
  );
};
export default OtherScreen;

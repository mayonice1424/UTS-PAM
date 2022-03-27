import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import gaya from '../Styles/Styles';
const PembatalanScreen = () => {
  return (
    <View
      style={{
        padding: 40,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: '#000',
        marginTop: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 6,
      }}>
      <View style={gaya.blockView}>
        <MaterialIconCommunity style={gaya.block} name="block-helper" />
      </View>
      <Text style={{marginTop: 40}}>Tidak Ada Pembatalan Pesanan</Text>
    </View>
  );
};
export default PembatalanScreen;

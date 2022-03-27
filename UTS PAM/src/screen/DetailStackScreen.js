import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Color,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Jadwal} from '../db/db';
import {useRoute} from '@react-navigation/native';
import gaya from '../Styles/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PesananScreen from './PesananScreen';

const DetailPesanan = ({route, navigation}) => {
  const {data} = route.params;
  const total = {...data, ...text};
  const [text, onChangeText] = useState({
    nama: '',
    identitas: '',
    umur: '',
  });
  const clickHandler = textInput => {
    return value => {
      onChangeText({...text, [textInput]: value});
    };
  };

  const panggildata = () => {
    let checkPelabuhanK = Jadwal.filter(x => {
      return (
        x.keberangkatan == data.keberangkatan &&
        x.tujuan == data.tujuan &&
        x.kelas == data.kelas
      );
    });
    if (checkPelabuhanK.length > 0) {
      return checkPelabuhanK.map((printJadwal, i) => {
        return (
          <View key={i}>
            <View style={gaya.boxKecil}>
              <View style={gaya.keberangkatanLayout}>
                <View style={gaya.keberangkatan}>
                  <View>
                    <Text style={gaya.keberangkatanText}>
                      {printJadwal.keberangkatan}
                    </Text>
                  </View>
                  <View style={gaya.keberangkatan}>
                    <AntDesign style={gaya.iconArrow} name="arrowright" />
                  </View>
                  <View>
                    <Text style={gaya.keberangkatanText}>
                      {printJadwal.tujuan}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={gaya.marginJadwal}>
                  <Text style={gaya.jadwal}>Jadwal Masuk Pelabuhan :</Text>
                  <Text style={gaya.text}>{data.tanggal}</Text>
                  <Text style={gaya.text}>{data.jam}</Text>
                </View>
                <View style={gaya.marginLayanan}>
                  <Text style={gaya.jadwal}>Layanan</Text>
                  <Text style={gaya.text}>{printJadwal.kelas}</Text>
                </View>
                <View style={gaya.line}>
                  <Text style={gaya.line}>
                    --------------------------------------------------------------------------------------
                  </Text>
                </View>
                <View style={gaya.textHargaMargin}>
                  <Text style={gaya.textDewasa}>Dewasax1</Text>
                  <Text style={gaya.textHarga}>{printJadwal.harga}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      });
    }
  };
  return (
    <View style={gaya.box}>
      <View>
        <Text style={gaya.title}> Shipship-an </Text>
      </View>
      <Text style={TextDetails.TextKuota}>Informsi Pesanan</Text>
      <View>{panggildata()}</View>
      <View style={gaya.identitas}>
        <Text style={TextDetails.TextKuota}>Nama :</Text>
        <View style={TextDetails.textInput}>
          <TextInput
            style={TextDetails.textInput}
            placeholder="Nama"
            placeholderTextColor={'black'}
            value={data.nama}
            onChangeText={clickHandler('nama')}
          />
        </View>
        <Text style={TextDetails.TextKuota}>Identitas :</Text>
        <View style={TextDetails.textInput}>
          <TextInput
            style={TextDetails.textInput}
            placeholder="Identitas"
            placeholderTextColor={'black'}
            value={data.identitas}
            onChangeText={clickHandler('identitas')}
          />
        </View>
        <Text style={TextDetails.TextKuota}>umur :</Text>
        <View style={TextDetails.textInput}>
          <TextInput
            style={TextDetails.textInput}
            placeholder="Umur"
            placeholderTextColor={'black'}
            value={data.umur}
            onChangeText={clickHandler('umur')}
          />
        </View>
      </View>
      <View>
        <View style={gaya.button}>
          <TouchableOpacity
            style={gaya.buttonDetail}
            onPress={() => navigation.navigate('Pesanan', {data: total})}>
            <Text style={gaya.textButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const TextDetails = StyleSheet.create({
  TextKuota: {
    marginTop: 0,
    marginBottom: 3,
    fontSize: 15,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: 'rgb(239, 244, 244)',
    borderColor: 'black',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  button: {
    backgroundColor: '#0094FF',
    margin: 9,
    padding: 2,
    textAlign: 'center',
    borderRadius: 8,
    color: 'white',
    justifyContent: 'center',
  },
});
export default DetailPesanan;

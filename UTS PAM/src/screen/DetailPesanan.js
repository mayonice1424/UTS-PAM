import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Color,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Jadwal} from '../db/db';
import gaya from '../Styles/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DetailPesanan = ({route, navigation}) => {
  const {data} = route.params;
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
            <View>
              <Text style={TextDetails.TextKuota}>
                Kuota Tersedia: {printJadwal.kuota}
              </Text>
            </View>
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
      <Text style={TextDetails.TextKuota}>Rincian Tiket</Text>
      <View>{panggildata()}</View>
      <View style={gaya.viewButtonDetail}>
        <View style={gaya.buttonDetail}>
          <TouchableOpacity
            style={gaya.buttonDetail}
            onPress={() => navigation.goBack()}>
            <Text style={gaya.textButton}>Kembali</Text>
          </TouchableOpacity>
        </View>
        <View style={gaya.buttonDetail}>
          <TouchableOpacity
            style={gaya.buttonDetail}
            onPress={() => navigation.navigate('DetailScreen', {data})}>
            <Text style={gaya.textButton}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const TextDetails = StyleSheet.create({
  TextKuota: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default DetailPesanan;

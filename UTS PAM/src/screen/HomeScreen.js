import * as React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import {useState} from 'react';
import gaya from '../Styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
const HomeScreen = ({navigation}) => {
  const [text, onChangeText] = useState({
    keberangkatan: '',
    tujuan: '',
    kelas: '',
    tanggal: 'March 14, 2022',
    jam: '21:00',
  });
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showtime, setShowTime] = useState(false);
  const [time, setTime] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    onChangeText({
      ...text,
      tanggal: moment(selectedDate).format('MMMM D, YYYY'),
    });
  };

  const onChangetime = (event, selectedTime) => {
    const currentDate = selectedTime;
    setShowTime(false);
    setTime(currentDate);
    onChangeText({...text, jam: onlyGetHoursAndMinutes(selectedTime)});
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showModeTime = currentMode => {
    setShowTime(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showModeTime('time');
  };

  const onlyGetHoursAndMinutes = date => {
    return date.getHours() + ':' + date.getMinutes();
  };

  const clickHandler = textInput => {
    return value => {
      onChangeText({...text, [textInput]: value});
    };
  };
  return (
    <View style={gaya.box}>
      <View>
        <Text style={gaya.title}> Shipship-an </Text>
      </View>
      <View style={gaya.filltext}>
        <Text style={gaya.filltext}>Pelabuhan Awal </Text>
        <View style={gaya.iconTextInput}>
          <Ionicons name="boat" size={40} color="#000" />
          <Picker
            selectedValue={text.keberangkatan}
            style={{height: 50, width: 200}}
            onValueChange={(itemValue, itemIndex) =>
              onChangeText({...text, keberangkatan: itemValue})
            }>
            <Picker.Item color="black" label="Pilih Pelabuhan" value="0" />
            <Picker.Item color="black" label="Merak" value="Merak" />
            <Picker.Item color="black" label="Bakauheni" value="Bakauheni" />
            <Picker.Item color="black" label="Natuna" value="Natuna" />
          </Picker>
        </View>
      </View>
      <View style={gaya.viewAnother}>
        <Text style={gaya.viewAnother}>Pelabuhan Tujuan</Text>
        <View style={gaya.iconTextInput}>
          <Ionicons name="boat-outline" size={40} color="#000" />
          <Picker
            selectedValue={text.tujuan}
            style={{height: 50, width: 200}}
            onValueChange={(itemValue, itemIndex) =>
              onChangeText({...text, tujuan: itemValue})
            }>
            <Picker.Item color="black" label="Pilih Pelabuhan" value="0" />
            <Picker.Item color="black" label="Merak" value="Merak" />
            <Picker.Item color="black" label="Bakauheni" value="Bakauheni" />
            <Picker.Item color="black" label="Natuna" value="Natuna" />
          </Picker>
        </View>
      </View>
      <View style={gaya.viewAnother}>
        <Text style={gaya.viewAnother}>Kelas Pelayanan</Text>
        <View style={gaya.iconTextInput}>
          <MaterialCommunityIcon name="seat-passenger" size={40} color="#000" />
          <Picker
            selectedValue={text.kelas}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              onChangeText({...text, kelas: itemValue})
            }>
            <Picker.Item color="black" label="Ekonomi" value="Ekonomi" />
            <Picker.Item color="black" label="Eksekutif" value="Eksekutif" />
            <Picker.Item color="black" label="Bisnis" value="Bisnis" />
          </Picker>
        </View>
      </View>
      <View style={gaya.viewAnother}>
        <Text style={gaya.viewAnother}>Tanggal Masuk Pelabuhan</Text>
        <View style={gaya.iconTextInput}>
          <Ionicons name="calendar" size={40} color="#000" />
          <View>
            <Text
              style={{
                paddingRight: 185,
                fontSize: 17,
                marginTop: 5,
                marginLeft: 15,
                fontFamily: 'Roboto',
                color: 'black',
              }}
              onPress={showDatepicker}>
              {moment(date).format('MMMM D, YYYY')}
            </Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>
      </View>
      <View style={gaya.viewAnother}>
        <Text style={gaya.viewAnother}>Jam Masuk Pelabuhan</Text>
        <View style={gaya.iconTextInput}>
          <MaterialCommunityIcon
            name="clock-time-four-outline"
            size={40}
            color="#000"
          />
          <View>
            <Text
              style={{
                paddingRight: 185,
                fontSize: 17,
                marginTop: 5,
                marginLeft: 15,
                fontFamily: 'Roboto',
                color: 'black',
              }}
              onPress={showTimepicker}>
              {onlyGetHoursAndMinutes(time)}
            </Text>
            {showtime && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChangetime}
              />
            )}
          </View>
        </View>
      </View>
      <View style={gaya.viewAnother}>
        <View style={gaya.TextCountPenumpang}>
          <Text style={gaya.viewAnother}>Dewasa</Text>
          <Text style={gaya.viewAnother}> 1 Orang</Text>
        </View>
      </View>
      <View style={gaya.buttonDetail}>
        <TouchableOpacity
          style={gaya.buttonDetail}
          onPress={() => navigation.navigate('Detail', {data: text})}>
          <Text style={gaya.textButton}>Buat Tiket!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

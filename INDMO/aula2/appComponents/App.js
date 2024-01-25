import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Saudacao from './components/Saudacao';

const logo = require('./assets/favicon.png');

export default function App() {
  return (
    <View style={
      {
        flex: 1,
        backgroundColor: '#540025',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }
    }>
      <Saudacao name={'Thata'} ></Saudacao>

      <Image source={logo}></Image> 

      <View style={[styles.lightGreenBox, styles.border]}>
        <Text style={styles.styleText}>
          O mundo é dançar conforme o caos.
        </Text>
        <Button
          color='#700979'
          title='Dont worry, be happy'
          onPress={() => alert("Hello mi friend.")
          }></Button>
      </View>

      <View style={[styles.lightBlueBox, styles.border]}>
        <Text style={styles.styleText}>
          Eu sou um bolinho de arroz.
        </Text>
        <Button
          color='#700979'
          title='De arroz'
          onPress={() => alert("Hello mi friend.")
          }></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightGreenBox: {
    backgroundColor: '#712b50',
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  lightBlueBox: {
    backgroundColor: '#8a5175',
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  border: {
    margin: 5,
    padding: 10,
    borderRadius: 15,
  },
  styleText: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  styleBtn: {
    backgroundColor: '#700979',
  }
});


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, Button, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';

//npm install react-native-modal

const logoReact = require('./assets/atom.png');
const user = require('./assets/user.png');
const lock = require('./assets/lock.png');
const happy = require('./assets/happy.png');
const yes = require('./assets/yes.png');

const CustomAlert = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Logado com sucesso!</Text>
          <Image source={happy} style={styles.modalImage} />
          <Text style={styles.modalText}>'Tenha uma ótima experiência!</Text>
          <Button title="OK!" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const CustomAlertEsqueciSenha = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Vamos lá!</Text>
          <Image source={yes} style={styles.modalImage} />
          <Text style={styles.modalText}>Vamos fazer seu cadastro!</Text>

          <Button title="OK!" onPress={onClose} />

        </View>
      </View>
    </Modal>
  );
};

export default function App() {

  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [isEsqueciSenhaModalVisible, setEsqueciSenhaModalVisible] = useState(false);

  const handleLogin = () => {
    setLoginModalVisible(true);
  };

  const handleEsqueciSenha = () => {
    setEsqueciSenhaModalVisible(true);
  };

  const closeModal = () => {
    setLoginModalVisible(false);
    setEsqueciSenhaModalVisible(false);
  };


  return (

    <SafeAreaView style={[styles.androidSafeArea]}>

      <View style={[styles.container]}>

          <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 5 }}>

            <Text style={{ fontSize: 50, color: 'white' }}> AniMa </Text>

            <Image source={logoReact} style={{ width: 55, height: 55, marginBottom: 5, marginTop: 5 }}></Image>

          </View>

          <Text style={{ fontSize: 30, color: 'white', marginBottom: 20 }}> Animes e mangás</Text>

          <View style={[styles.bloco]}>

            <View style={{ marginBottom: 50 }}>

              <View style={{ display: 'flex', flexDirection: 'row' }}>

                <Image source={user} style={{ width: 16, height: 16, marginTop: 17, marginRight: 7 }}></Image>
                <Text style={styles.label}>Email / Nome de usuario:</Text>

              </View>

              <TextInput placeholder='Email/nome de usuario' style={styles.entradaTexto}></TextInput>

              <View style={{ display: 'flex', flexDirection: 'row' }}>

                <Image source={lock} style={{ width: 16, height: 16, marginTop: 18, marginRight: 7 }}></Image>
                <Text style={styles.label}>Senha:</Text>

              </View>

              <TextInput
                placeholder='Digite sua senha'
                style={styles.entradaTexto}
                secureTextEntry={true}
                password={true}
              ></TextInput>

              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#FAF3DD' : '#96A4C5',
                    width: 80,
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginTop: 30,
                    marginLeft: 65,
                  },
                ]}

                onPress={handleLogin}
              >
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Logar</Text>

              </Pressable>

              <CustomAlert isVisible={isLoginModalVisible} onClose={closeModal} />

            </View>

          </View>

          <View style={styles.outsideBox}>

            <Text style={styles.outsideText}>Não tem cadastro?</Text>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#FAF3DD' : '#96A4C5',
                  width: 140,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                },
              ]}

              onPress={handleEsqueciSenha}
            >
              <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Cadastre-se!</Text>

            </Pressable>

            <CustomAlertEsqueciSenha isVisible={isEsqueciSenhaModalVisible} onClose={closeModal} />

            <Text style={{ color: '#a42527', fontSize: 17, textDecorationLine: 'underline', fontWeight: 'bold' }}>Esqueci a senha</Text>

            <StatusBar style="auto" />

          </View>

        </View>

    </SafeAreaView >

  );

}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    display: 'fixed',
    flex: 1,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D1A39',
  },
  bloco: {
    display: 'fixed',
    width: '70%',
    maxHeight: '40%',
    minHeight: '40%',
    borderRadius: 20,
    backgroundColor: '#FAE5E2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    paddingTop: 30,
  },
  label: {
    fontSize: 17,
    marginBottom: 5,
    marginTop: 15,
    fontWeight: 'bold',
  },
  entradaTexto: {
    maxWidth: '100%',
    height: 50,
    borderRadius: 6,
    marginBottom: 5,
    backgroundColor: '#DFB6B2',
    padding: 15,
    fontSize: 15,
  },
  outsideBox: {
    marginTop: 20,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  outsideText: {
    color: 'white',
    fontSize: 17
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FAE5E2',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 7,
  },
  modalText: {
    fontSize: 16,
  },
});



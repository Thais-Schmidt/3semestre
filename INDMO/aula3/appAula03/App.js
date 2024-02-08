import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Linking, TouchableOpacity, Text, View, Platform, SafeAreaView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons/'
import { TextInput } from 'react-native-paper';

import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


export default function App() {
  return (

    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>

      <View style={styles.container}>

        <Text style={{ color: 'black', fontSize: 16, paddingBottom: 15 }} >Aula 03 - Trabalhando com ícones</Text>

        {/* Ícone exibido em uma View com texto */}
        <View style={styles.alinharHorizontal}>

          <FontAwesome name='home' size={50} color='gray'></FontAwesome>
          <Text style={{ fontSize: 28, color: 'black', paddingTop: 12 }}>Bem vindo ao início</Text>

        </View>

        <StatusBar style="auto" />

        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* Ícone e botão criado com a biblioteca padrão*/}

          <AntDesign.Button name='home' size={50} height={80} justifyContent='center' alignItems='center' backgroundColor='green' borderRadius={20} onPress={() => Alert.alert('Você clicou no Antdesign Button')}>

            Home

          </AntDesign.Button>


          {/* Ícone e botão criado com a biblioteca FontAwesome*/}

          <FontAwesome.Button name='home' height={50} width={63} onPress={() => Alert.alert('Você clicou no Awesome Button')}>

            Home

          </FontAwesome.Button>

          {/* Ícone e botão criado com a biblioteca FontAwesome com link para abrir o Youtuben neste exemplo foi inserido um alert perguntando ao usuário*/}

          <FontAwesome.Button name='youtube' height={45} backgroundColor='red' onPress={() => Alert.alert('Link externo', 'Deseja abrir http://youtube.com?',

            [
              {
                text: 'Cancelar',
              },
              {
                text: 'Acessar',
                onPress: () => Linking.openURL('http://youtube.com')
              }
            ]
          )}>

            Abrir Youtube

          </FontAwesome.Button>

          {/* Ícone e botão criado com a biblioteca FontAwesome com link para abrir o Facebook*/}

          <FontAwesome.Button name='facebook' height={45} onPress={() => Linking.openURL('http://facebook.com')}>

            Abrir Facebook

          </FontAwesome.Button>

          {/* Ícone e botão criado com a biblioteca Feather com link para abrir o Github*/}

          <Feather.Button name='github' height={45} color='black' backgroundColor='gainsboro' onPress={() => Linking.openURL('https://github.com/izaiasmaia?tab=repositories')}>

            Abrir Github

          </Feather.Button>

        </View>



        {/* Alinhando botão em linha ocupando o espaço disponível*/}

        <View style={[styles.alinharHorizontal, styles.container2]}>

          {/* Botão criado com TouchableOpacity */}

          <TouchableOpacity style={styles.btnSocialMedia}>

            <FontAwesome name='facebook' size={32}></FontAwesome>
            <Text style={styles.btnText}>Facebook</Text>

          </TouchableOpacity>

          {/* Botão criado com TouchableOpacity */}

          <TouchableOpacity style={styles.btnSocialMedia}>

            <Text style={styles.btnText}>Instagram</Text>
            <Feather name='instagram' size={32}></Feather>

          </TouchableOpacity>

        </View>

        {/* Botão ocupando 100% da tela*/}

        <View style={[styles.alinharHorizontal, styles.container2]}>

          {/* Botão criado com TouchableOpacity */}

          <TouchableOpacity style={[styles.btnSocialMedia, styles.vermelho]}>

            <FontAwesome name='youtube' size={32} color='black'></FontAwesome>
            <Text style={styles.btnText}>Youtube</Text>

          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10
  },
  container2: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10
  },
  alinharHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingBottom: 15,
  },
  btnSocialMedia: {
    flexBasis: '100%',
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#ADD8E6',
    height: 45,
  },
  btnText: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 26,
    color: 'white',
  },
  vermelho: {
    backgroundColor: 'red',
  },

});

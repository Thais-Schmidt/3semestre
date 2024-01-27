import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, Platform, Pressable, Alert, TextInputComponent, TextInput } from 'react-native';
//ScrowIew serve para que a pagina possa ser rolada para cima e para baixo, 
//ela deve se colocada dentro da View-mãe e com todos os elementos dentro dela
import Saudacao from './components/Saudacao';

const logo = require('./assets/favicon.png');

export default function App() {
  return (

    <SafeAreaView style={[styles.androidSafeArea]}>

      <ScrollView>

        <View style={[styles.container]}>

          <View style={styles.separador}></View>

          <View>

            <Text style={styles.labelInput}>Campo 1</Text>
            <TextInput placeholder='Campo 1' style={styles.input}></TextInput>

            <Text style={styles.labelInput}>Campo 2</Text>
            <TextInput placeholder='Campo 2' style={styles.input}></TextInput>

          </View>

          <View style={styles.separador}></View>

          <Saudacao name={'Thata'}></Saudacao>

          <View style={styles.separador}></View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: 10 }} >

            <Button title='Botãozinho' color='#49725e' onPress={() => Alert.alert('Capibara', 'capibara, capibara, capibara')} ></Button>

            <Button title='Botãozão' color='#054123' onPress={() => Alert.alert('Tchubiraudam')} ></Button>

            <Button title='Botão' color='#0e2a1c' onPress={() => Alert.alert('James', 'cade a salada de fruta?',
              [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Botão CANCELAR foi pressionado!')
                },
                {
                  text: 'Ok',
                  onPress: () => console.log('Botão OK foi pressionado!')
                }
              ]
            )} ></Button>

          </View>

          <View style={styles.separador}></View>

          <Pressable

            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'white' : 'black',
                width: 150,
                height: 40,
                justifyContent: 'center',
                borderRadius: 30,
                alignItems: 'center',
              },
              styles.styleBtn,
            ]}

            onPress={() => Alert.alert('Botão pressionado!')}>

            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Botão</Text>

          </Pressable>

          <View style={styles.separador}></View>

          <Image
            source={logo}
            style={{ margin: 10, justifyContent: 'center' }}
          ></Image>

          <View style={styles.separador}></View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>

            <View style={[styles.lightGreenBox, styles.border]}>

              <Text style={styles.styleText}>
                O mundo é dançar conforme o caos.
              </Text>

              <Button
                color='#142f2f'
                title='Dont worry, be happy'
              ></Button>

            </View>

            <View style={[styles.lightBlueBox, styles.border]}>

              <Text style={styles.styleText}>
                Eu sou um bolinho de arroz.
              </Text>

              <Button
                color='#1d4444'
                title='De arroz'
              ></Button>

            </View>

          </View>

          <View style={styles.separador}></View>

          <Image
            source={{ uri: 'https://picsum.photos/677' }}
            style={{ width: 400, height: 400, borderRadius: 30, marginBottom: 20 }}
          ></Image>
          {/* se não dermos uma largura e altura a imagem não aparece */}

          <Text style={styles.styleText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </Text>

          <StatusBar style="auto" />

          <View style={styles.separador}></View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#053c20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightGreenBox: {
    backgroundColor: '#295f5f',
    height: 200,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  lightBlueBox: {
    backgroundColor: '#607c7c',
    height: 200,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'justify',
  },
  separador: {
    width: '100%',
    backgroundColor: 'lightgreen',
    height: 1,
    margin: 20,
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#fafafa',
  },
  labelInput: {
    width: '100%',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
    color: '#fafafa',
    fontFamily: 'monospace',
  }
});


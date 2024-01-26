import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, Platform, Pressable, Alert } from 'react-native';
//ScrowIew serve para que a pagina possa ser rolada para cima e para baixo, 
//ela deve se colocada dentro da View-mãe e com todos os elementos dentro dela
import Saudacao from './components/Saudacao';

const logo = require('./assets/favicon.png');

export default function App() {
  return (

    <SafeAreaView style={[styles.container]}>

      <ScrollView style={{ padding: 20 }}>

        <View style={[styles.androidSafeArea]}>

          <Saudacao name={'Thata'}></Saudacao>

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

          {/* <Image
            source={logo}
            style={{ margin: 40, justifyContent: 'center' }}
          ></Image> */}

          <View style={{ display: 'flex', flexDirection: 'row', margin: 20 }}>

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

          <Image
            source={{ uri: 'https://picsum.photos/800' }}
            style={{ width: 400, height: 200 }}
          ></Image>
          {/* se não dermos uma largura e altura a imagem não aparece */}

          <Text style={styles.styleText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>

          <StatusBar style="auto" />

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
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  lightBlueBox: {
    backgroundColor: '#607c7c',
    height: 200,
    width: 160,
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
  },
});


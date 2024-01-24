import { StatusBar } from 'expo-status-bar';  //faz o import da barra de status do proprio componente, do app, barra de status é a notificação (do topo do celular)
import { StyleSheet, Text, View, Button } from 'react-native'; //view _. nossa tela como um todo(tudo que desenharmos)

//esta forma de escrita é chamada JSX
//dentro dessa View, os comentarios sao diferentes -> {/* Comentario */}

export default function App() {
  return (
    <View style={style.container}>
      <Text>Deu tudo certo!</Text>
      <Text style={style.titulo}>Meu primeiro app mobile hihihi</Text>
      <Button
        title='Sou Inutil'
        color="#841584"
        onPress={() => alert("Voltei para causar o caos e a discordia.")}>  {/* Prestar atenção, por que é desse jeito que a gente edita os elementos */} 
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, //esse display flex fez com que toda a area da tela fosse ocupada, sem ele, toda a area ocupada seria apenas o espaço da barra de notificação
    backgroundColor: '#cd46a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'white',
    
  },
  

});


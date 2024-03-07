import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import api from './src/services/api/api';

export default function App() {

  const [cliente, setCliente] = useState([]);
  const [IDCli, setIDCli] = useState(0);

  const getCliente = async (id) => {

    try {

      const { data } = await api.get(`/clientes/${id}`);
      console.log(data);
      setCliente(data);

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <View style={styles.container}>

      <TextInput
        placeholder='Digite o ID desejado'
        style={styles.entradaTexto}
        keyboardType='numeric'
        onChangeText={setIDCli}
        value={IDCli}
      />

      <TouchableOpacity

        onPress={() => getCliente(IDCli)}
        style={styles.btn}

      >

        <Text style={{ color: 'white' }}>Pressione para pesquisar</Text>

      </TouchableOpacity>

      <Text>ID do cliente:{cliente[0]?.id}</Text>

      <Text>Nome do cliente:{cliente[0]?.nome}</Text>

      <Text>Idade do cliente:{cliente[0]?.idade}</Text>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#7c7e9d',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  entradaTexto: {
    backgroundColor: '#e2d4e0',
    height: 37,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 3
  }
});

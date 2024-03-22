import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { DatabaseConnection } from './src/database/database'; //importando o banco de dados do arquivo database.js

const db = new DatabaseConnection.getConnection; //quando chama o getConnection ele chama a instrução dentro da função 

export default function App() {

  const [nome, setNome] = useState(null);

  useEffect(() => {
    db.trasaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)',
        [],
        () => console.log('Tabela clientes criada com sucesso!')
      );
    });
  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.title}> Cadastro:</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder='Digite um nome'
      />

      <Button
        title='Adicionar'
      />

      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e86ab',
    alignItems: 'center',
    justifyContent: 'center',
    height: 898,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f4f4f9'
  },
  input: {
    width: '70%',
    height: 40,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: 'white',
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'white'
  }
});

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { DatabaseConnection } from './src/database/database'; //importando o banco de dados do arquivo database.js

const db = new DatabaseConnection.getConnection; //quando chama o getConnection ele chama a instrução dentro da função 

export default function App() {

  const [nome, setNome] = useState(null);
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)',
        [],
        () => console.log('Tabela clientes criada com sucesso!'),
        (_, error) => console.error(error) //utiliza-se o underline, quando não se quer pegar o retorno da função. Quando querer exibir o retorno, é só trocar o underline por algum "texto" e acrescentar no outro paranteses
      );
    });
  }, []);

  const deletarCliente = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM clientes WHERE id=?;',
        [id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            atualizaLista();
            Alert.alert('Info', 'Registro excluido com sucesso!')
          } else {
            Alert.alert('Erro', 'Registro não excluido, verifique e tente novamente')
          }
        },
        (_, error) => {
          console.error('Erro ao excluir registro', error);
        }
      )
    })
  }

  const adicionarCliente = () => {
    if (nome === null || nome.trim() === '') {
      Alert.alert('Erro', 'Insira um valor válido para o nome.');
      return;
    }

    db.transaction(tx => {
      tx.executeSql('INSERT INTO clientes(nome) VALUES (?)',
        [nome],
        (_,) => {
          Alert.alert('Info', 'Registro inserido com sucesso!');
          setNome('');
          atualizaLista();
        },
        (_, error) => {
          console.error('Erro ao adicionar cliente', error);
          Alert.alert('Erro', 'Ocorreu um erro ao adicionar o cliente');
        }
      );
    });
  }

  const atualizaLista = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM clientes;',
        [],
        (_, { rows }) => {
          setRegistros(rows._array)
        }
      );
    })
  }

  useEffect(() => {
    atualizaLista();
  }, [])


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
        onPress={adicionarCliente}
      />

      {registros.map(item => (
        <View key={item.id} style={styles.alinhar}>

          <Text style={styles.boxtext} >{item.id}</Text>
          <Text style={styles.boxtext2}>{item.nome}</Text>
          <Button title='Deletar' onPress={() => deletarCliente(item.id)} />

        </View>

      ))}

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
  },
  alinhar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10
  },
  boxtext: {
    width: 30,
    backgroundColor: 'white',
    marginBottom: 5,
    textAlign: 'center',
    borderRadius: 3,
    fontSize: 17
  },
  boxtext2: {
    width: 150,
    backgroundColor: 'white',
    marginBottom: 5,
    textAlign: 'justify',
    paddingLeft: 10,
    borderRadius: 3,
    fontSize: 17,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

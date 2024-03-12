import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Button, } from 'react-native';

import api from '../../services/api/api';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const exibeAlert = () => {
        setShowAlert(true)
    }

    const salvarCliente = async () => {
        try {
            if (nome == '' || nome == null) {
                setAlertMessage('Preencha corretamente o nome.');
                exibeAlert();
                return;
            } if(isNaN(idade)){
                setAlertMessage('O valor digitado para idade esta incorreto.');
                exibeAlert();
                return;
            }
            if (idade == '' || idade == null || idade < 1) {
                setAlertMessage('Informe uma idade maior que zero.');
                exibeAlert();
                return;
            }

            const response = await api.post('/cliente', { nome: nome, idade: Number(idade) })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        if ((error.request._response).includes('Failed')) {
                            console.log('Erro ao conecta coma API');
                        }
                    } else {
                        console.log(error.message);
                    }
                    console.log(error.config)
                });

            if (response != undefined ) {
                if(response.data[0].affectRows == 1) {
                    setAlertMessage('Cliente cadastrado com sucesso!');
                    exibeAlert();
                    setNome('');
                    setIdade(0);
                } else {
                    console.log("O registro não foi inserido. Tente novamente.")
                }
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.cardTitle}>
                <Text style={styles.title}>
                    Preencha os campos abaixo:
                </Text>
            </View>

            <View>
                <Text>Nome do cliente:</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChange={setNome}
                />
            </View>

            <View>
                <Text>Idade do cliente:</Text>
                <TextInput
                    style={styles.input}
                    value={idade.toString()} //recupera o texto 
                    onChange={setIdade} //recebe e armazena o que foi escrito no input 
                />
            </View>

            <TouchableOpacity

                onPress={() => {
                    salvarCliente()
                }}
                style={styles.alingVH}>

                <Text>
                    Salvar
                </Text>

            </TouchableOpacity>

            {showAlert && (
                Alert.alert(
                    'Atenção',
                    alertMessage,
                    [
                        { text: 'OK', onPress: () => setAlertMessage(false) }
                    ]
                )
            )}

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdf6',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    cardTitle: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5
    },
    title: {
        alignItems: 'center',
        fontSize: 20
    },
    input: {
        alignItems: 'center',
        fontSize: 30,
        borderWidth: 1,
        width: '80%',
        padding: 5,
    },
    alingVH: {
        alignItems: 'center',
        justifyContent: 'center',
    }

});

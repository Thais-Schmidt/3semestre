import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Button, SafeAreaView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function App() {

    const navigation = useNavigation();

    const navegaPesquisaID = () => {
        navigation.navigate('DetalhesCliente');
    };

    const navegaNovoCliente = () => {
        navigation.navigate('NovoCliente')
    };

    const navegaTodosClientes = () => {
        navigation.navigate('TodosClientes')
    };

    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>
                Bem vindo coleguinha
            </Text>

            <Button
                title='Pesquisar por ID'
                onPress={navegaPesquisaID}
            />

            <Button
                title='Cadastro novo cliente'
                onPress={navegaNovoCliente}
            />

            <Button
                title='Exibir todos os clientes'
                onPress={navegaTodosClientes}
            />


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdf6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 20,

    }

});

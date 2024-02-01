import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';

export default function Contato() { //vai receber as informações do formulario

    const navigation = useNavigation();
    const voltarHome = () => { navigation.dispatch(StackActions.popToTop()) }

    return (

        <SafeAreaView style={styles.container}>

            <Text>Tela Contato</Text>
            <Button title='Voltar' onPress={() => navigation.goBack()}></Button>
            <Button title='Voltar para Home' onPress={voltarHome} ></Button>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4c4bc',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

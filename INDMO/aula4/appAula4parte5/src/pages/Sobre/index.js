import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Sobre() { //vai receber as informações do formulario

    const navigation = useNavigation();

    const route = useRoute();
    const navegaContato = () => { navigation.navigate('Contato') }

    return (
        <SafeAreaView style={styles.container}>

            <Text>Tela Sobre!</Text>
            <TextInput value={route.params?.nome}></TextInput>
            <TextInput value={route.params?.email}></TextInput>
            <Button title='Ir para Contato' onPress={navegaContato}></Button>

        </SafeAreaView>
    );

    // return (
    //     <SafeAreaView style={styles.container}>

    //         <Text>Tela Sobre!</Text>
    //         <TextInput value={route.params?.nome}></TextInput>
    //         <TextInput value={route.params?.email}></TextInput>

    //     </SafeAreaView>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89a296',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

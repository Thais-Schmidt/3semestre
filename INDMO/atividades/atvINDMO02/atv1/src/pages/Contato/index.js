import { SafeAreaView, Text, StyleSheet, ScrollView, Platform, View, TextInput, Button, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.box}>

                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}> Entre em contato conosco!</Text>

                        <Text style={{ fontWeight: 'bold', paddingRight: 255}}>Nome:</Text>
                        <TextInput placeholder='Nome completo' style={styles.entradaTexto}></TextInput>

                        <Text style={{ fontWeight: 'bold', paddingRight: 260}}>Email:</Text>
                        <TextInput placeholder='Email' style={styles.entradaTexto}></TextInput>

                        <Text style={{ fontWeight: 'bold', paddingRight: 220}}>Mensagem:</Text>
                        <TextInput placeholder='Escreva sua mensagem' style={styles.entradaTextoMsg}></TextInput>
                        
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'yellow' : '#000000',
                                    width: 140,
                                    height: 40,
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10,
                                },
                            ]}

                            onPress={() => alert("Sua mensagem foi enviada!")}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#fafafa' }}>Enviar</Text>

                        </Pressable>



                        {/* Título;
                        3 TextInput com suas respectivas descrições;
                        Botão enviar que exiba uma mensagem ao ser clicado; */}

                    </View>

                </View>

            </ScrollView>


        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#c1c1c1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 125,
        paddingBottom: 90
    },
    box: {
        width: 400,
        height: 600,
        padding: 30,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    entradaTexto: {
        width: 300,
        height: 35,
        borderRadius: 6,
        backgroundColor: '#cccccc',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10
    },
    entradaTextoMsg: {
        width: 300,
        height: 305,
        borderRadius: 6,
        backgroundColor: '#cccccc',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
    },
});
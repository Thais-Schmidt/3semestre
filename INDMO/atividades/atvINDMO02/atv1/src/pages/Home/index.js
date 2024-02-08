import { SafeAreaView, Text, StyleSheet, Image, View, TextInput, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logoSenai = require('../../assets/logo-senai.png');

export default function Home() {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.box}>

                        <Image
                            source={logoSenai} style={styles.img}
                        />

                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Escola SENAI Celso Charuri</Text>

                        <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', paddingTop: 5 }}>Técnico em Desenvolvimento de Sistemas</Text>

                        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>INDMO - Interface para Dispositivos Móveis</Text>

                        <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', paddingTop: 70 }}>Thaís Schmidt da Silva</Text>

                    </View>

                    <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold' , paddingTop: 340}}>Sumaré, 07/02/2024</Text>

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
        backgroundColor: '#dddede',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 27,
        paddingTop: 200
    }, 
    img: {
        height: 90,
        width: 300,
        marginLeft: 16
    },
});

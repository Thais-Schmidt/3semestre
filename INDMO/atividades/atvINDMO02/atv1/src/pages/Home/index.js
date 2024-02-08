import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();
    
    return (

        <SafeAreaView  style={styles.container}>

            <Text>Thaís Schmidt da Silva</Text>
            <Text>Sumaré, 07/02/2024</Text>
            <Text>Escola SENAI Celso Charuri</Text>
            <Text>Técnico em Desenvolvimento de Sistemas</Text>
            <Text>INDMO - Interface para Dispositivos Móveis</Text>
        
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c1c1c11',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
